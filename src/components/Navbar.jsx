"use client"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const {data : session, status} = useSession();
  const navMenu = () =>{
    return (
      <>
        <li>
          <Link href={'/'}>Home</Link>  
        </li>
        <li>
          <Link href={'/about'}>About</Link>  
        </li>
        <li>
          <Link href={'/services'}>Services</Link>  
        </li>
        <li>
          <Link href={'/blogs'}>Blogs</Link>  
        </li>
        <li>
          <Link href={'/contacts'}>Contacts</Link>  
        </li>

      </>
    )
  }
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navMenu()}
            </ul>
          </div>
          <Link href={'/'} className="text-xl">
            <Image src={'/assets/logo.svg'} height={87} width={107} alt="logo"></Image>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navMenu()}
          </ul>
        </div>
        <div className="navbar-end">
          {status == 'authenticated' ?(
            <>
            <span className="mx-2">Welcome, {session?.user?.name}</span>
            <li onClick={() => signOut()}className="mx-2">Logout</li>
            </>
          ) :(
          <>
          <Link href={'/login'} className="mx-2">Login</Link>
          <Link href={'/register'} className="mx-2">Register</Link>
          </>
          )}
          <a className="btn btn-outline">Appointment</a>
        </div>
      </div>
    </div>
  );
}
