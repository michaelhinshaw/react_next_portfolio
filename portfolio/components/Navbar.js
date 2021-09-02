import React, { useState, useEffect } from "react";
import {
  MenuAlt1Icon,
  CodeIcon,
  MusicNoteIcon
} from "@heroicons/react/outline";
import Link from "next/link";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-600 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:justify-start">
            <div className="flex item-center justify-center">
              <Link href="/music">
                <a className="flex items-center">
                  <MusicNoteIcon className="h-7 w-7 text-yellow-400 hover:text-white mr-2" />
                </a>
              </Link>
              <Link href="/">
                <a className="text-md font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
                  <span>ColoringSounds</span>
                </a>
              </Link>
              <Link href="/code">
                <a className="flex items-center">
                  <CodeIcon className="h-7 w-7 text-pink-500 hover:text-white mr-2" />
                </a>
              </Link>
            </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <MenuAlt1Icon className="h-7 w-7 text-gray-200" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link href="/about">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/diary">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Diary
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
