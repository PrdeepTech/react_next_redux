'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.css";
import UserProfile from "./UserProfile";

// const Home = lazy(()=> import ('@/app/page'));
// const About = lazy(()=> import('@/app/about/page'));
// const Services = lazy(()=> import('@/app/services/page'))
// const Contact = lazy(()=> import('@/app/contact/page'))

const Header = () => {
  const pathname = usePathname();
  return (
    <>
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          <Link href="/">Lborus</Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-4">
          
          <Link href="/" className={pathname === "/" ? "text-red-500 font-bold" : "text-gray-600"}>Home</Link>
          <Link href="/about" className={pathname === "/about" ? "text-red-500 font-bold" : "text-gray-600"}>About</Link>
          <Link href="/services" className={pathname === "/services" ? "text-red-500 font-bold" : "text-gray-600"}>Services</Link>
          <Link href="/contact" className={pathname === "/contact" ? "text-red-500 font-bold" : "text-gray-600"}>Contact</Link>
          <Link href="/productlist" className={pathname === "/productlist" ? "text-red-500 font-bold" : "text-gray-600"}>Products</Link>
         </nav>
         <UserProfile />
      </div>

    </header>
    </>
  )
}

export default Header