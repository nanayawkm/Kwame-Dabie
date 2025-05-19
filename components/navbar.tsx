"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      // Close mobile menu when scrolling
      if (isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    if (isOpen) {
      setIsOpen(false)
    }
  }

  return (
    <header
      className={cn(
        "w-full fixed top-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/90 backdrop-blur-md py-2 sm:py-3 shadow-lg" : "bg-transparent py-3 sm:py-4",
      )}
    >
      <div className="w-full flex justify-between items-center pl-3 sm:pl-6 pr-2 sm:pr-4">
        <Link href="/#" className="flex items-center">
          <div className="relative h-12 w-48 xs:h-14 xs:w-60 sm:h-20 sm:w-96 md:h-24 md:w-[400px] lg:h-28 lg:w-[500px]">
            <Image
              src="/images/gallery/Dabie Logo png White.PNG"
              alt="Kwame Dabie Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link
            href="/#"
            className="text-gold-500 hover:text-white transition-colors duration-300 text-sm uppercase tracking-tight"
          >
            Home
          </Link>
          <Link
            href="/#music"
            className="text-gold-500 hover:text-white transition-colors duration-300 text-sm uppercase tracking-tight"
          >
            Music
          </Link>
          <Link
            href="/#gallery"
            className="text-gold-500 hover:text-white transition-colors duration-300 text-sm uppercase tracking-tight"
          >
            Gallery
          </Link>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gold-500 hover:text-white transition-colors duration-300 text-sm uppercase tracking-tight bg-transparent border-none cursor-pointer"
          >
            About
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-1 sm:p-2 text-gold-500 hover:text-white focus:outline-none transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6 sm:h-7 sm:w-7" /> : <Menu className="h-6 w-6 sm:h-7 sm:w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          isOpen ? "opacity-100 pointer-events-auto translate-x-0" : "opacity-0 pointer-events-none translate-x-full",
        )}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-2 text-gold-500 hover:text-white focus:outline-none"
          aria-label="Close menu"
        >
          <X className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>

        <div className="flex flex-col items-start w-full px-4 sm:px-8 mt-16">
          <div className="relative h-16 w-56 xs:h-20 xs:w-72 sm:h-24 sm:w-96 mb-8 self-start ml-4">
            <Image
              src="/images/gallery/Dabie Logo png White.PNG"
              alt="Kwame Dabie Logo"
              fill
              className="object-contain object-left"
            />
          </div>

          <nav className="flex flex-col items-start space-y-5 pl-4">
            <Link
              href="/#"
              className="text-gold-500 hover:text-white transition-colors duration-300 text-xl uppercase tracking-tight"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/#music"
              className="text-gold-500 hover:text-white transition-colors duration-300 text-xl uppercase tracking-tight"
              onClick={toggleMenu}
            >
              Music
            </Link>
            <Link
              href="/#gallery"
              className="text-gold-500 hover:text-white transition-colors duration-300 text-xl uppercase tracking-tight"
              onClick={toggleMenu}
            >
              Gallery
            </Link>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gold-500 hover:text-white transition-colors duration-300 text-xl uppercase tracking-tight bg-transparent border-none cursor-pointer text-left"
            >
              About
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
