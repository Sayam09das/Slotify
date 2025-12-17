import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { Menu, X, LayoutDashboard, CalendarClock, BookOpen, Clock, ChevronDown, User, LogOut } from "lucide-react";
import logo from "/Slotify.png";

const AdminNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const profileRef = useRef(null);


    const navItems = [
        { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
        { name: "Slots", href: "/admin/slots", icon: CalendarClock },
        { name: "Bookings", href: "/admin/bookings", icon: BookOpen },
        { name: "Schedule", href: "/admin/schedule", icon: Clock },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                profileRef.current &&
                !profileRef.current.contains(event.target)
            ) {
                setIsProfileOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <a href="/admin/dashboard" className="flex items-center gap-2">
                        <div className="bg-[#4f39f6] p-2 rounded-lg">
                            <img src={logo} alt="Slotify Admin" className="w-5 h-5" />
                        </div>
                        <span className="text-xl font-bold">Slotify</span>
                        <span className="text-xs px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded">
                            Admin
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navItems.map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                className="flex items-center gap-2 text-sm font-medium text-black hover:text-[#4f39f6] transition group"
                            >
                                <item.icon className="w-4 h-4 group-hover:text-[#4f39f6]" />
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Profile */}
                    <div ref={profileRef} className="hidden lg:flex items-center relative">
                        <button
                            onClick={() => setIsProfileOpen((prev) => !prev)}
                            className="flex items-center gap-3 px-2 py-1 rounded-lg 
               hover:bg-gray-50 transition cursor-pointer"
                        >
                            {/* Avatar */}
                            <div className="relative">
                                <div
                                    className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 
                   flex items-center justify-center font-semibold text-sm"
                                >
                                    A
                                </div>

                                {/* Online Indicator */}
                                <span
                                    className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 
                   border-2 border-white rounded-full"
                                />
                            </div>

                            {/* Name */}
                            <div className="flex flex-col text-left">
                                <span className="text-sm font-medium text-gray-800">Admin</span>
                                <span className="text-xs text-gray-500">Administrator</span>
                            </div>

                            {/* Chevron (rotates) */}
                            <ChevronDown
                                className={`w-4 h-4 text-gray-500 transition-transform duration-200
        ${isProfileOpen ? "rotate-180" : "rotate-0"}`}
                            />
                        </button>

                        {/* Dropdown */}
                        {isProfileOpen && (
                            <div
                                className="absolute right-0 top-14 w-56 bg-white border border-gray-200 
                 rounded-xl shadow-lg overflow-hidden z-50"
                            >
                                {/* Header */}
                                <div className="px-4 py-3 border-b bg-gray-50">
                                    <p className="text-sm font-medium text-gray-800">Admin Panel</p>
                                    <p className="text-xs text-gray-500">admin@slotify.com</p>
                                </div>

                                {/* Actions */}
                                <div className="py-1">
                                    <a
                                        href="/admin/profile"
                                        className="flex items-center gap-3 px-4 py-2 text-sm 
                     text-gray-700 hover:bg-gray-50 transition cursor-pointer"
                                    >
                                        <User className="w-4 h-4 text-gray-500" />
                                        Profile Settings
                                    </a>

                                    <a
                                        href="/logout"
                                        className="flex items-center gap-3 px-4 py-2 text-sm 
                     text-red-600 hover:bg-red-50 transition cursor-pointer"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        Logout
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>




                    {/* Mobile Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded hover:bg-gray-100"
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden transition-all overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="py-4 border-t space-y-1">
                        {navItems.map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <item.icon className="w-4 h-4 text-gray-600" />
                                {item.name}
                            </a>
                        ))}

                        <a
                            href="/logout"
                            className="block px-4 py-3 text-sm text-red-600 hover:bg-gray-50"
                        >
                            Logout
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;
