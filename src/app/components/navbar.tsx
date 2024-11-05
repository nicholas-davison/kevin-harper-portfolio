"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [shakeInstagram, setShakeInstagram] = useState(false);
    const [shakeFacebook, setShakeFacebook] = useState(false);
    const [shakeEmail, setShakeEmail] = useState(false);

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

      const triggerShake = () => {
        setShakeInstagram(true);
        setTimeout(() => setShakeFacebook(true), 150);
        setTimeout(() => setShakeEmail(true), 300);
    
        setTimeout(() => {
          setShakeInstagram(false);
          setShakeFacebook(false);
          setShakeEmail(false);
        }, 1000);
      };

    return (
        
        <nav className={`fixed w-full transition-colors duration-300 ${isScrolled || menuOpen ? 'bg-gray-950 text-white' : 'bg-transparent text-white'}`}>
            <div className="flex justify-between items-center p-4">
                <Link href="/" className="text-wrap text-4xl md:text-7xl md:pl-12 whitespace-nowrap bg-black bg-opacity-50 p-4 rounded-lg">Kevin Harper</Link>
                <div className="flex justify-between items-center p-4">
                    <div className='flex flex-col md:flex-row mr-8 md:mr-6 text-2xl md:text-4xl'>
                        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <i className={`fa-brands fa-instagram md:mr-5 hover:scale-150 transition-transform duration-300 ${shakeInstagram ? 'shake' : ''}`}></i>
                        </a>
                        <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <i className={`fa-brands fa-facebook md:mr-5 hover:scale-150 transition-transform duration-300 ${shakeFacebook ? 'shake' : ''}`}></i>
                        </a>
                        <a href="mailto:yourname@example.com">
                            <i className={`fa-regular fa-envelope md:mr-20 hover:scale-150 transition-transform duration-300 ${shakeEmail ? 'shake' : ''}`}></i>
                        </a>
                        </div>
                    <button className="text-2xl md:text-4xl md:mr-5 focus:outline-none" onClick={toggleMenu}>
                        <i className="fas fa-bars "></i>
                    </button>
                </div>
            </div>
            {menuOpen && (
            <div className={`dropdown flex flex-col items-end p-4 mr-5 space-y-2 transition-colors duration-300 ${isScrolled ? 'bg-gray-950 text-white' : 'bg-transparent text-white'}`}>
                <Link href="/" className="md:text-2xl" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link href="/credits" className="md:text-2xl" onClick={() => setMenuOpen(false)}>Credits</Link>
                <button className="md:text-2xl" onClick={() => {
                    triggerShake()
                    
                    }}>
                    Contact
                </button>
            </div>
            )}
      </nav>
    )
}