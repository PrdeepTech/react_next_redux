import Link from 'next/link'

const Footer = () => {
  return (
    
    <>
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Branding */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-blue-600">MyWebsite</h2>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
          <Link href="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer