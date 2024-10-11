"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaBell, FaEnvelope } from "react-icons/fa";
import logo from "../_assets/logo.png";

export default function DashboardNavbar() {
  const pathname = usePathname();
  const userName = "John Doe";

  return (
    <nav className="w-full p-5 flex items-center justify-between bg-white shadow-lg">
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="Logo" width={60} height={50} />
        </Link>
      </div>
      <div className="flex items-center space-x-6 flex-1 justify-center">
        <span className="text-lg font-semibold text-black">
          Hello, {userName}
        </span>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 w-64"
          />
          <FaSearch className="absolute right-2 top-2 text-gray-500" />
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <FaBell className="text-blue-600 text-2xl cursor-pointer" />
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1.5">
            3
          </span>
        </div>
        <div className="relative">
          <FaEnvelope className="text-blue-600 text-2xl cursor-pointer" />
          <span className="absolute top-0 right-0 bg-green-600 text-white text-xs rounded-full px-1.5">
            5
          </span>
        </div>
        <Link
          href="/auth/logout"
          className="text-blue-900 font-sans font-semibold transition-colors duration-200 hover:text-indigo-600"
        >
          Log Out
        </Link>
      </div>
    </nav>
  );
}
