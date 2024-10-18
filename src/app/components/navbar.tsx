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
        
        <nav className={`fixed w-full transition-colors duration-300 ${isScrolled ? 'bg-gray-800 text-white' : 'bg-transparent text-white'}`}>
            <div className="flex justify-between items-center p-4">
                <Link href="/" className="text-4xl md:text-7xl pl-5 whitespace-nowrap">Kevin Harper</Link>
                <button className="text-3xl mr-5 focus:outline-none" onClick={toggleMenu}>
                    <i className="fas fa-bars "></i>
                </button>
            </div>
            {menuOpen && (
            <div className={`dropdown flex flex-col items-end p-4 mr-5 space-y-2 transition-colors duration-300 ${isScrolled ? 'bg-gray-800 text-white' : 'bg-transparent text-white'}`}>
                <Link href="/" className="text-lg" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link href="/credits" className="text-lg" onClick={() => setMenuOpen(false)}>Credits</Link>
                <Link href="/contact" className="text-lg" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
            )}
      </nav>
    )
}