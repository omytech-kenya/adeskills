"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 modern-navbar shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
              ADES<span className="text-[#D71920]">K</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`nav-link transition-all duration-300 hover:scale-105 ${
                isActive("/") 
                  ? "active" 
                  : "text-white hover:text-gray-200"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`nav-link transition-all duration-300 hover:scale-105 ${
                isActive("/about") 
                  ? "active" 
                  : "text-white hover:text-gray-200"
              }`}
            >
              About
            </Link>
            <Link 
              href="/programs" 
              className={`nav-link transition-all duration-300 hover:scale-105 ${
                isActive("/programs") 
                  ? "active" 
                  : "text-white hover:text-gray-200"
              }`}
            >
              Programs
            </Link>
            <Link 
              href="/gallery" 
              className={`nav-link transition-all duration-300 hover:scale-105 ${
                isActive("/gallery") 
                  ? "active" 
                  : "text-white hover:text-gray-200"
              }`}
            >
              Gallery
            </Link>
            <Link 
              href="/resources" 
              className={`nav-link transition-all duration-300 hover:scale-105 ${
                isActive("/resources") 
                  ? "active" 
                  : "text-white hover:text-gray-200"
              }`}
            >
              Resources
            </Link>
            <Link 
              href="/contact" 
              className={`nav-link transition-all duration-300 hover:scale-105 ${
                isActive("/contact") 
                  ? "active" 
                  : "text-white hover:text-gray-200"
              }`}
            >
              Contact
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="px-4 py-2 text-white hover:text-gray-200 transition-all duration-300 hover:scale-105">
              Login
            </Link>
            <Link href="/signup" className="px-6 py-2 bg-[#D71920] text-white font-medium rounded-xl hover:bg-[#B3141A] transition-all duration-300 transform hover:-translate-y-1 modern-btn">
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-gray-200 transition-all duration-300 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#002366] border-t border-gray-100">
              <Link href="/" className={`block px-3 py-3 transition-all duration-300 hover:bg-[#6D0D0D] rounded-lg ${
                isActive("/") ? "text-[#D71920] font-semibold" : "text-white hover:text-gray-200"
              }`}>
                Home
              </Link>
              <Link href="/about" className={`block px-3 py-3 transition-all duration-300 hover:bg-[#6D0D0D] rounded-lg ${
                isActive("/about") ? "text-[#D71920] font-semibold" : "text-white hover:text-gray-200"
              }`}>
                About
              </Link>
              <Link href="/programs" className={`block px-3 py-3 transition-all duration-300 hover:bg-[#6D0D0D] rounded-lg ${
                isActive("/programs") ? "text-[#D71920] font-semibold" : "text-white hover:text-gray-200"
              }`}>
                Programs
              </Link>
              <Link href="/gallery" className={`block px-3 py-3 transition-all duration-300 hover:bg-[#6D0D0D] rounded-lg ${
                isActive("/gallery") ? "text-[#D71920] font-semibold" : "text-white hover:text-gray-200"
              }`}>
                Gallery
              </Link>
              <Link href="/resources" className={`block px-3 py-3 transition-all duration-300 hover:bg-[#6D0D0D] rounded-lg ${
                isActive("/resources") ? "text-[#D71920] font-semibold" : "text-white hover:text-gray-200"
              }`}>
                Resources
              </Link>
              <Link href="/contact" className={`block px-3 py-3 transition-all duration-300 hover:bg-[#6D0D0D] rounded-lg ${
                isActive("/contact") ? "text-[#D71920] font-semibold" : "text-white hover:text-gray-200"
              }`}>
                Contact
              </Link>
              <div className="pt-4 space-y-3 border-t border-gray-100 mt-4">
                <Link href="/login" className="w-full px-4 py-3 text-white hover:text-gray-200 transition-all duration-300 text-left hover:bg-[#6D0D0D] rounded-lg block">
                  Login
                </Link>
                <Link href="/signup" className="w-full px-4 py-3 bg-[#D71920] text-white font-medium rounded-xl hover:bg-[#B3141A] transition-all duration-300 block">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 