import React, { useState } from 'react';
import { Calendar, X, Menu } from 'lucide-react';
import logo from "/Slotify.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-2 cursor-pointer group">
                        <div className="bg-[#4f39f6] p-2 rounded-lg group-hover:scale-110 transition-transform duration-200">
                            <img
                                src={logo}
                                alt="Slotify logo"
                                className="w-5 h-5 object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold text-black">Slotify</span>
                    </div>


                    {/* Center Menu - Desktop */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link
                            to="/"
                            className="text-black hover:text-[#4f39f6] transition-colors text-sm font-medium relative group"
                        >
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4f39f6] group-hover:w-full transition-all duration-300"></span>
                        </Link>

                        <Link
                            to="/book"
                            className="text-black hover:text-[#4f39f6] transition-colors text-sm font-medium relative group"
                        >
                            Book Slot
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4f39f6] group-hover:w-full transition-all duration-300"></span>
                        </Link>

                        <Link
                            to="/how-it-works"
                            className="text-black hover:text-[#4f39f6] transition-colors text-sm font-medium relative group"
                        >
                            How It Works
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4f39f6] group-hover:w-full transition-all duration-300"></span>
                        </Link>

                        <Link
                            to="/support"
                            className="text-black hover:text-[#4f39f6] transition-colors text-sm font-medium relative group"
                        >
                            Support
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4f39f6] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </div>


                    {/* Right Side Buttons - Desktop */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Link
                            to="/admin"
                            className="text-black hover:text-[#4f39f6] transition-colors text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-50"
                        >
                            Admin
                        </Link>

                        <Link
                            to="/login"
                            className="bg-[#4f39f6] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#4230d4] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Login
                        </Link>
                    </div>


                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-black" strokeWidth={2} />
                        ) : (
                            <Menu className="w-6 h-6 text-black" strokeWidth={2} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="py-4 space-y-1 border-t border-gray-100">
                        <Link
                            to="/"
                            className="block text-black hover:text-[#4f39f6] hover:bg-gray-50 transition-colors text-sm font-medium py-3 px-4 rounded-lg"
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>

                        <Link
                            to="/book"
                            className="block text-black hover:text-[#4f39f6] hover:bg-gray-50 transition-colors text-sm font-medium py-3 px-4 rounded-lg"
                            onClick={toggleMenu}
                        >
                            Book Slot
                        </Link>

                        <Link
                            to="/how-it-works"
                            className="block text-black hover:text-[#4f39f6] hover:bg-gray-50 transition-colors text-sm font-medium py-3 px-4 rounded-lg"
                            onClick={toggleMenu}
                        >
                            How It Works
                        </Link>

                        <Link
                            to="/support"
                            className="block text-black hover:text-[#4f39f6] hover:bg-gray-50 transition-colors text-sm font-medium py-3 px-4 rounded-lg"
                            onClick={toggleMenu}
                        >
                            Support
                        </Link>

                        <Link
                            to="/admin"
                            className="block text-black hover:text-[#4f39f6] hover:bg-gray-50 transition-colors text-sm font-medium py-3 px-4 rounded-lg"
                            onClick={toggleMenu}
                        >
                            Admin
                        </Link>

                        <Link
                            to="/login"
                            className="block bg-[#4f39f6] text-white text-center px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#4230d4] transition-all duration-200 shadow-md mt-2"
                            onClick={toggleMenu}
                        >
                            Login
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;