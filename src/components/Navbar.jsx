import { NavLink, Link } from "react-router-dom"
import { useState } from "react"
import logo from "../logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => setIsOpen(false)

  return (
    <nav className="bg-white backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={handleLinkClick}
          className="flex items-center space-x-2"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8 object-contain transition-transform duration-500 hover:rotate-180"
          />
          <span className="text-xl font-extrabold text-black font-poppins hidden md:inline-block leading-none">
            kuxh.xp
          </span>
        </Link>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1 rounded-md focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu Items */}
        <ul
          className={`md:flex md:items-center md:space-x-6 text-sm font-medium transition-all duration-300 ease-in-out ${
            isOpen
              ? "block absolute top-full left-0 right-0 bg-white shadow-md rounded-md p-4 mt-2 space-y-2 md:relative md:top-0 md:p-0 md:space-y-0"
              : "hidden md:flex"
          }`}
        >
          <li>
            <NavLink
              to="/about"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `block px-3 py-2 border-b-2 ${
                  isActive
                    ? "border-black font-semibold text-black"
                    : "border-transparent hover:border-black hover:text-black"
                }`
              }
            >
              About Me
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `block px-3 py-2 border-b-2 ${
                  isActive
                    ? "border-black font-semibold text-black"
                    : "border-transparent hover:border-black hover:text-black"
                }`
              }
            >
              Works
            </NavLink>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="inline-block bg-black text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-900 hover:text-white transition"
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
