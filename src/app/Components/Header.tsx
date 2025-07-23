import Link from "next/link";
import "./header.css";
// const Home = lazy(()=> import ('@/app/page'));
// const About = lazy(()=> import('@/app/about/page'));
// const Services = lazy(()=> import('@/app/services/page'))
// const Contact = lazy(()=> import('@/app/contact/page'))

const Header = () => {
  return (
    <>
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          <Link href="/">MyWebsite</Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600 active:text-blue-500">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 active:text-blue-500">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600 active:text-blue-500">Services</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 active:text-blue-500">Contact</Link>
        </nav>
      </div>
    </header>
    </>
  )
}

export default Header