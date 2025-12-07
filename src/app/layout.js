import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import SessionWrapper from "@/components/SessionWrapper";
import Modal from "@/components/Modal";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Fitness Tracker",
  description: "my fitness tracking application",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dim">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <SessionWrapper>
          <Nav />
          
          {children}
          <Modal />
        </SessionWrapper>
      </body>
    </html>
  );
}
