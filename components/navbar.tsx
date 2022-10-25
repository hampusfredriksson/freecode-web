import React, { useState } from "react";
import Link from "next/link";
import { navLinks } from "./constants";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "/public/images/logo.png";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => setMenu(!menu);
  // TODO: Add sticky navbar
  return (
    <div className="w-full overflow-hidden bg-white">
      <div className="flex justify-center items-center sm:px-16 px-6 ">
        <div className="xl:max-w-[1280px] w-full">
          <nav className="w-full flex py-6 justify-between items-center">
            <Image
              src={logo}
              alt="freecode"
              className=""
              width={120}
              height={24}
            />
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`${
                    index === navLinks.length - 1 ? "mr-0" : "mr-10"
                  }`}>
                  <Link href={`/${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
              {menu ? (
                <AiOutlineClose size={24} onClick={handleClick} />
              ) : (
                <AiOutlineMenu size={24} onClick={handleClick} />
              )}
              <div
                className={`${
                  menu ? "flex" : "hidden"
                  // FIXME remove outline on navbar items
                } p-6 border border-purple-freecode absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>
                {" "}
                <ul
                  className="list-none flex flex-col active:bg-violet-700 text-purple-400 justify-end items-center
                flex-1">
                  {navLinks.map((nav, index) => {
                    return (
                      <li
                        key={nav.id}
                        className={`${
                          index === navLinks.length - 1 ? "mr-0" : "mb-10"
                        }`}>
                        <Link
                          href={`${
                            nav.id === "contact"
                              ? `<a href="mailto:info@freecode.se">Contact</>`
                              : `/${nav.id}`
                          }
                      }`}>
                          {nav.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
