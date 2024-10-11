"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

    return (
        <nav className={`fixed w-full transition-colors duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-transparent text-black'}`}>
            <div className="flex justify-between items-center p-4">
                <Link href="/" className="text-7xl pl-5 pt-5">Kevin Harper</Link>
                <button className="text-3xl focus:outline-none" onClick={toggleMenu}>
                    <i className="fas fa-bars "></i>
                </button>
            </div>
            {menuOpen && (
            <div className="flex flex-col items-start p-4 space-y-2 bg-gray-800 text-white transition-all duration-300 transform">
                <Link href="/" className="text-lg" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link href="/about" className="text-lg" onClick={() => setMenuOpen(false)}>About</Link>
                <Link href="/contact" className="text-lg" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
            )}
      </nav>
    )
}