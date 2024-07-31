import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-[#333] text-white py-4 px-16 flex items-center">
      <nav>
        <ul className="flex gap-7 text-xl font-semibold">
          <li>
            <Link
              href="/"
              className="hover:text-blue-400 hover:underline transition-all duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="hover:text-blue-400 hover:underline transition-all duration-300"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
