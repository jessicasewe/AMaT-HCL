import Link from "next/link";
import Image from "next/image";
import logo from "../_assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-5 flex items-center justify-between bg-white shadow-lg z-50">
      {/* Logo and text beside it */}
      <div className="flex items-center space-x-4">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="Logo" width={60} height={50} />
            <span className="text-xl font-semibold text-black">AMaT-HCL</span>
          </div>
        </Link>
      </div>

      {/* Navbar links */}
      <div className="flex-1 flex justify-center space-x-6">
        <Link href="/">
          <span className="text-blue-900 font-sans font-semibold">Home</span>
        </Link>
        <Link href="/about-us">
          <span className="text-blue-900 font-sans font-semibold">
            About Us
          </span>
        </Link>
        <Link href="/services">
          <span className="text-blue-900 font-sans font-semibold">
            Services
          </span>
        </Link>
        <Link href="/contact-us">
          <span className="text-blue-900 font-sans font-semibold">
            Contact Us
          </span>
        </Link>
      </div>

      {/* Log In and Sign Up buttons */}
      <div className="flex items-center space-x-6">
        <Link href="/login">
          <span className="text-blue-900 font-sans font-semibold">Log In</span>
        </Link>
        <Link href="/signup">
          <span className="text-black font-sans border border-blue-300 px-4 py-2 rounded-full hover:bg-blue-300 hover:text-white transition-colors font-semibold">
            Sign Up
          </span>
        </Link>
      </div>
    </nav>
  );
}