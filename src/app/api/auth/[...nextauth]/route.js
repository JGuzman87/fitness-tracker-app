import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const { email, password } = credentials;

        await connectDB();
        const user = await User.findOne({ email });

        if (!user) return null;

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return null;

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
  },

  callbacks: {
    /**
     * This runs ANY time a JWT is created or updated.
     * Google login ONLY works correctly if we capture
     * account + profile here — not "user".
     */
    async jwt({ token, user, account, profile }) {
      await connectDB();

      // 🔥 GOOGLE PROVIDER FLOW
      if (account?.provider === "google") {
        // Find or create user in MongoDB using Google email
        let dbUser = await User.findOne({ email: profile.email });

        if (!dbUser) {
          dbUser = await User.create({
            name: profile.name,
            email: profile.email,
            password: "", // Google users have no password
          });
        }

        token.id = dbUser._id.toString(); // ALWAYS MongoDB ID
        return token;
      }

      // 🔥 CREDENTIALS LOGIN FLOW
      if (user) {
        token.id = user.id; // value returned from authorize()
      }

      return token;
    },

    /**
     * This runs on every request that pulls session data.
     * We simply place the JWT id into the session's user object.
     */
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
};

/** Exports required for Next.js route handlers */
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
