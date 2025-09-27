import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">MyApp</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        <Link href="/login" className="hover:text-indigo-600">Login</Link>
        <Link href="/signup" className="hover:text-indigo-600">Sign Up</Link>
      </div>
    </nav>
  );
}
