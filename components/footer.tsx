import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillHouseFill } from "react-icons/bs";
import { SiTwitter, SiGmail, SiLinkedin, SiDiscord } from "react-icons/si";

export default function footer() {
  const currentYear = new Date().getFullYear();
  const buttonStyling = `flex rounded-full shadow-lg px-3 py-3 mx-2`;

  return (
    <>
      <footer className="relative pt-8 pb-6">
        <div className="container mx-auto px-4">
          <hr className="my-2 border-gray-200" />
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4 mb-8">
              <div className="my-2 lg:mb-0 flex flex-row justify-start -mx-4 items-start">
                <a
                  href="https://www.linkedin.com/company/freecode/"
                  target="no_blank"
                  rel="noreferrer">
                  <button
                    className={`${buttonStyling} hover:text-linkedin`}
                    type="button">
                    <SiLinkedin size={20} />
                  </button>
                </a>
                <a
                  href="https://discord.gg/2ndNscE"
                  target="no_blank"
                  rel="noreferrer">
                  <button
                    className={`${buttonStyling} hover:text-discord`}
                    type="button">
                    <SiDiscord size={20} />
                  </button>
                </a>
                <a
                  href="https://twitter.com/FreeCodeAB"
                  target="no_blank"
                  rel="noreferrer">
                  <button
                    className={`${buttonStyling} hover:text-twitter`}
                    type="button">
                    <SiTwitter size={20} />
                  </button>
                </a>
                <a href="mailto:info@freecode.se">
                  <button
                    className={`${buttonStyling} hover:text-mail`}
                    type="button">
                    <SiGmail size={20} />
                  </button>
                </a>
              </div>
              <div className="mt-10">
                <BsFillHouseFill size={30} />
                <h4 className="text-sm">
                  <a
                    href="https://www.google.se/maps/place/David+Bagares+gata+26B,+111+38+Stockholm/@59.3372595,18.0633202,17z/data=!3m1!4b1!4m5!3m4!1s0x465f9d5d679ff00d:0xa827691a1a799dcb!8m2!3d59.3372595!4d18.0655088"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono">
                    David Bagares gata 26B, 111 38 Stockholm
                  </a>
                </h4>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <ul className="list-unstyled mt-4">
                    <li>
                      <Link href="/consultant">
                        <a className="text-blueGray-600 hover:text-gray-600 font-semibold block pb-2 text-sm">
                          Våra konsulter
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/event">
                        <a className="text-blueGray-600 hover:text-gray-600 font-semibold block pb-2 text-sm">
                          Events
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/test">
                        <a className="text-blueGray-600 hover:text-gray-600 font-semibold block pb-2 text-sm">
                          Konsultbehov
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/test2">
                        <a className="text-blueGray-600 hover:text-gray-600 font-semibold block pb-2 text-sm">
                          Som anställd
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-2 border-gray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-500 flex justify-center font-semibold py-1">
                &copy; &nbsp;
                <span id="get-current-year">{currentYear}&nbsp;</span>
                <Link href="/consultant">
                  <a className="text-gray-500 hover:text-gray-800">
                    &nbsp;FreeCode ♥
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
