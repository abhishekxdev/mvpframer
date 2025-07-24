"use client"

import Link from 'next/link'
import { useState } from 'react'
import { FiPhoneCall, FiMenu, FiX } from 'react-icons/fi'
import { FaRegDotCircle } from 'react-icons/fa'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 md:px-4 mt-1 md:mt-2">
      <div className="max-w-4xl mx-auto px-2 md:px-4">
        <nav className="bg-black/80 backdrop-blur-md border border-neutral-800 rounded-full flex items-center justify-between py-2 md:py-2.5 px-4 md:px-6 relative">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <Link href="/#projects" className="flex items-center space-x-2">
              <FaRegDotCircle className="text-white w-5 h-5" />
              <span className="font-normal text-base text-white" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>MVP Studio</span>
            </Link>
          </div>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex items-center justify-center ml-2 text-white focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
          </button>
          {/* Center Nav Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-6">
              <li><Link href="/#development-services" className="text-white text-sm font-normal" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Services</Link></li>
              <li><Link href="/work" className="text-white text-sm font-normal" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Projects</Link></li>
              <li><Link href="/#testimonials" className="text-white text-sm font-normal" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Testimonials</Link></li>
              <li><Link href="/#plans" className="text-white text-sm font-normal" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Plans</Link></li>
            </ul>
          </div>
          {/* Book A Call Button (always visible) */}
          <a
            href="https://cal.com/mvpstudio.in/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 rounded-full border border-neutral-700 bg-black/60 hover:bg-black/80 transition text-white text-sm font-normal ml-2"
            style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}
          >
            <FiPhoneCall className="w-4 h-4" />
            <span>Book A Call</span>
          </a>
          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-black/95 rounded-b-2xl shadow-lg flex flex-col items-center py-4 md:hidden animate-fade-in z-50">
              <ul className="flex flex-col space-y-4 w-full items-center">
                <li><Link href="/#development-services" className="text-white text-base font-normal" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }} onClick={() => setMenuOpen(false)}>Services</Link></li>
                <li><Link href="/work" className="text-white text-base font-normal" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }} onClick={() => setMenuOpen(false)}>Projects</Link></li>
                <li><Link href="/#testimonials" className="text-white text-base font-normal" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }} onClick={() => setMenuOpen(false)}>Testimonials</Link></li>
                <li><Link href="/#plans" className="text-white text-base font-normal" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }} onClick={() => setMenuOpen(false)}>Plans</Link></li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}