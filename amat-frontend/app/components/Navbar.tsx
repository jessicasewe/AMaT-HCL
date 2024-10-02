import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 p-5 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <span className="text-2xl font-bold">Logo</span>{" "}
        </Link>
      </div>
      <div className="flex-1 flex justify-center space-x-4">
        <Link href="/">
          <span className="text-black">Home</span>
        </Link>
        <Link href="/about">
          <span className="text-black">About</span>
        </Link>
        <Link href="/contact">
          <span className="text-black">Contact</span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/login">
          <span className="text-black">Login</span>
        </Link>
        <Link href="/signup">
          <span className="text-black">Signup</span>
        </Link>
      </div>
    </nav>
  );
}
