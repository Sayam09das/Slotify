import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';
import logo from "/Slotify.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <a href="/" className="flex items-center space-x-2 cursor-pointer group">
                        <div className="bg-[#4f39f6] p-2 rounded-lg group-hover:scale-110 transition-transform duration-200">
                            <img
                                src={logo}
                                alt="Slotify logo"
                                className="w-5 h-5 object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold text-black">Slotify</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {[
                            { name: "Home", href: "/" },
                            { name: "Book Slot", href: "/book" },
                            { name: "How It Works", href: "/how-it-works" },
                            { name: "Support", href: "/support" },
                        ].map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                className="text-black hover:text-[#4f39f6] transition-colors text-sm font-medium relative group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4f39f6] group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <a
                            href="/admin"
                            className="text-black hover:text-[#4f39f6] text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition"
                        >
                            Admin
                        </a>

                        <a
                            href="/login"
                            className="bg-[#4f39f6] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#4230d4] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Login
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="py-4 space-y-1 border-t border-gray-100">
                        {[
                            { name: "Home", href: "/" },
                            { name: "Book Slot", href: "/book" },
                            { name: "How It Works", href: "/how-it-works" },
                            { name: "Support", href: "/support" },
                            { name: "Admin", href: "/admin" },
                        ].map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                onClick={toggleMenu}
                                className="block text-black hover:text-[#4f39f6] hover:bg-gray-50 transition text-sm font-medium py-3 px-4 rounded-lg"
                            >
                                {item.name}
                            </a>
                        ))}

                        <a
                            href="/login"
                            onClick={toggleMenu}
                            className="block bg-[#4f39f6] text-white text-center px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#4230d4] transition shadow-md mt-2"
                        >
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
