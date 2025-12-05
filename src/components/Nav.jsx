"use client";
import Link from 'next/link';
import Image from 'next/image';
import Form from './Form';
import { signOut } from "next-auth/react";
import { useSession } from 'next-auth/react';

const Nav = () => {

  const { data: session } = useSession();
  const handleClick = () => {
    signOut({ callbackUrl: '/'})
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="md:navbar-start navbar-center flex gap-50 md:gap-0 ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
        {  session && <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>}
            { session && <li>
              <Link href={'#'} onClick={handleClick}>Logout</Link> 
            </li>}
            {!session && <li><Link href={'/signup'}>Sign up</Link></li>}
          </ul>
        </div>
        <Link href="/">
          <Image
            src="/fit-logo.png"
            alt="fitness logo"
            width={150}
            height={150}
            className=" hover:bg-white/20 ml-2"
          />
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
       { session &&  <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>}
         <li>
         { session ? (<Link href={'#'} onClick={handleClick}>Logout</Link> ) : (<details> 
              <summary>Get Started</summary>
              <ul className="p-2 bg-base-100 w-40 z-1">
                <li>
                  <Form btnTitle="Login" style=" w-full text-left" />
                </li>

                <li>
                  <Link href="/signup">Sign Up</Link>
                </li>
              </ul>
            </details>)}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav