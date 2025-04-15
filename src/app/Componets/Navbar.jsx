'use client';

import { useState } from 'react';
import { Menu, X, Search, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const menuItems = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Pages',
        submenu: [
            { label: 'About Us', href: '/about' },
            { label: 'Team', href: '/team' },
            { label: 'FAQ', href: '/faq' },
        ],
    },
    {
        label: 'Services',
        submenu: [
            { label: 'Consulting', href: '/services/consulting' },
            { label: 'Development', href: '/services/development' },
        ],
    },
    {
        label: 'Portfolio',
        href: '/Blog',
    },
    {
        label: 'Blog',
        href: '/Blog',
        
    },
    {
        label: 'Contact',
        href: '/contact',
    },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState(null);

    return (
        <nav className="bg-[#d9e7e7] shadow-md rounded-t-2xl z-50 relative">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Logo" className="h-8 w-8" />
                    <span className="text-xl font-bold text-gray-800">Bexon</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700 relative">
                    {menuItems.map((item, idx) => (
                        <li
                            key={idx}
                            className="relative group"
                            onMouseEnter={() => setHoveredMenu(idx)}
                            onMouseLeave={() => setHoveredMenu(null)}
                        >
                            {item.submenu ? (
                                <div className="flex items-center cursor-pointer">
                                    {item.label}
                                    <span className="ml-1">&#x25BC;</span>
                                </div>
                            ) : (
                                <Link href={item.href} className="hover:text-teal-600 transition">
                                    {item.label}
                                </Link>
                            )}

                            {/* Dropdown */}
                            {item.submenu && hoveredMenu === idx && (
                                <ul
                                    className="absolute top-full left-0 bg-white shadow-lg mt-2 rounded-lg py-2 w-48 z-10
                  transition-all duration-300 ease-out transform opacity-100 scale-100"
                                >
                                    {item.submenu.map((subItem, subIdx) => (
                                        <li key={subIdx}>
                                            <Link
                                                href={subItem.href}
                                                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                            >
                                                {subItem.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Icons */}
                <div className="flex items-center gap-4">
                    <Search className="w-5 h-5 text-gray-700 cursor-pointer" />

                    <button className="bg-[#178c8d] text-white font-semibold px-4 py-2 rounded-full flex items-center gap-2 hover:bg-[#127272] transition">
                        Let’s Talk
                        <span className="bg-black p-1 rounded-full">
                            <ArrowUpRight className="text-white w-4 h-4" />
                        </span>
                    </button>

                    {/* Mobile toggle */}
                    <div className="md:hidden">
                        {mobileMenuOpen ? (
                            <X
                                className="w-6 h-6 text-gray-800 cursor-pointer"
                                onClick={() => setMobileMenuOpen(false)}
                            />
                        ) : (
                            <Menu
                                className="w-6 h-6 text-gray-800 cursor-pointer"
                                onClick={() => setMobileMenuOpen(true)}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden px-4 pb-4 bg-[#dceced]">
                    <ul className="flex flex-col gap-3 text-gray-800 font-medium">
                        {menuItems.map((item, idx) => (
                            <li key={idx}>
                                {item.submenu ? (
                                    <div>
                                        {item.label}
                                        <ul className="pl-4 mt-1 space-y-1">
                                            {item.submenu.map((subItem, subIdx) => (
                                                <li key={subIdx}>
                                                    <Link href={subItem.href} className="text-sm text-gray-600">
                                                        {subItem.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    <Link href={item.href}>{item.label}</Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
