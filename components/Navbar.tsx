"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 py-3 ${scrolled ? "bg-white text-gray-900 shadow-md" : "bg-transparent text-gray-900"}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-5 md:mx-7 lg:mx-10 xl:mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-4xl font-semibold whitespace-nowrap">
            Portfo<span className={`transition-all duration-300 ${scrolled ? `text-gray-900` : 'text-indigo-500'}`}>lio</span>
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link href="/" className={`transition-all duration-300 block py-2 px-3 text-gray-900 md:hover:text-indigo-500 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 `} aria-current="page">
                Beranda
              </Link>
            </li>
            {/* <li>
              <Link href="/experiences" className={`transition-all duration-300 block py-2 px-3 text-gray-900 md:hover:text-indigo-500 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 `}>
                Pengalaman
              </Link>
            </li> */}
            <li>
              <Link href="/projects" className={`transition-all duration-300 block py-2 px-3 text-gray-900 md:hover:text-indigo-500 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 `}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/articles" className={`transition-all duration-300 block py-2 px-3 text-gray-900 md:hover:text-indigo-500 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 `}>
                Artikel
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
