"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 shadow-lg px-6 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* ✅ LOGO SECTION */}
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <Image
              src="/logo.svg" // 🟢 Replace with your logo path inside the /public folder
              alt="Alumni Intelligence System"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="ml-3 text-2xl font-bold">
              Alumni Intelligence System
            </span>
          </div>
        </Link>

        {/* ✅ DESKTOP NAVIGATION */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/">
            <span className="hover:text-orange-300 cursor-pointer">Home</span>
          </Link>
          <Link href="/about">
            <span className="hover:text-orange-300 cursor-pointer">About</span>
          </Link>
        </nav>

        {/* ✅ HAMBURGER ICON (Mobile) */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* ✅ MOBILE MENU */}
      {menuOpen && (
        <nav className="md:hidden mt-4 bg-indigo-600 rounded-lg shadow-lg">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link href="/">
                <span
                  className="hover:text-orange-300 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span
                  className="hover:text-orange-300 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
