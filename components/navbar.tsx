import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../public/FreeCode.png";

export default function Navbar() {
  return (
    <nav className="bg-white px-2 sm:px-4 py-1 dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <a className="flex items-center">
            <Image src={logo} alt="FreeCode logo" height={24} width={120} />
          </a>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-purple-freecode hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Kontakta oss
          </button>
        </div>

        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link href="/">
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white bg-purple-freecode rounded md:bg-transparent md:text-purple-freecode md:p-0 dark:text-white"
                aria-current="page">
                Hem
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="block py-2 pr-4 pl-3 text-gray-700 active:bg-purple-freecode rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-freecode md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Om oss
              </a>
            </Link>
          </li>
          <li>
            <Link href="/consultant">
              <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-freecode md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Konsulter
              </a>
            </Link>
          </li>
          <li>
            <Link href="/event">
              <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-freecode md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Events
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
