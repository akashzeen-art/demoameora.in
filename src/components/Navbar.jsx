import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/">
          <img
            src="/logo/zeen_medeconect logo.png"
            alt="Zeen Medeconect Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-purple-700 transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-purple-700 transition-colors">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-purple-700 transition-colors">Contact Us</Link></li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-white border-t px-4 pb-4 flex flex-col gap-3 text-gray-700 font-medium">
          <li><Link to="/" onClick={() => setOpen(false)} className="block py-1 hover:text-purple-700">Home</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)} className="block py-1 hover:text-purple-700">About Us</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)} className="block py-1 hover:text-purple-700">Contact Us</Link></li>
        </ul>
      )}
    </nav>
  )
}
