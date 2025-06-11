import React, { useState, useEffect } from "react";
import DropdownMenu from "./Dropdown";


import {
    FiChevronDown,
    FiUser,
    FiArrowUpRight,
    FiX
} from "react-icons/fi";
import {
    HiOutlineLightBulb,
    HiOutlineBookOpen,
    HiOutlineUsers,
    HiOutlineDocumentText,
    HiOutlineNewspaper,
    HiOutlineMenuAlt3
} from "react-icons/hi";

const navItems = [
    { label: "Courses", key: "courses", icon: <HiOutlineBookOpen className="mr-1" /> },
    { label: "Why ADRS Spark", key: "why", icon: <HiOutlineLightBulb className="mr-1" /> },
    { label: "For Partners", key: "partners", icon: <HiOutlineUsers className="mr-1" /> },
    { label: "Resources", key: "resources", icon: <HiOutlineDocumentText className="mr-1" /> },
    { label: "Blog", key: "blog", icon: <HiOutlineNewspaper className="mr-1" /> },
];

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleCloseDropdown = () => {
            setActiveDropdown(null);
        };

        window.addEventListener("closeDropdown", handleCloseDropdown);
        return () => window.removeEventListener("closeDropdown", handleCloseDropdown);
    }, []);


    return (
        <nav className="bg-white shadow-sm px-4 sm:px-8 py-4 flex items-center justify-between border-b border-gray-100">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-gray-900">
                ADRS <span className="text-gray-600">SPARK</span>
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
                <div className="flex items-center gap-6">
                    {navItems.map((item) => (
                        <div
                            key={item.key}
                            className="relative"
                            onClick={() => {
                                if (item.key === "blog") return;
                                setActiveDropdown((prev) => (prev === item.key ? null : item.key));
                            }}

                        >
                            <button
                                className={`flex items-center text-md font-medium px-2 py-1 rounded-md transition-all duration-200 ${activeDropdown === item.key
                                    ? "text-green-600 bg-green-50"
                                    : "text-gray-700 hover:text-gray-900"}
`}
                            >
                                {item.icon}
                                {item.label}
                                {item.key !== "blog" && (
                                    <FiChevronDown className={`ml-1 transition-transform duration-200 ${activeDropdown === item.key ? "transform rotate-180" : ""
                                        }`} />
                                )}
                            </button>

                            {activeDropdown === item.key && item.key !== "blog" && (
                                <DropdownMenu type={item.key} />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex gap-4 items-center">
                <button className="flex items-center text-sm font-medium text-gray-600 hover:text-green-600 px-3 py-2 rounded-md hover:bg-green-50 transition-colors duration-200">
                    <FiUser className="mr-2" />
                    Login
                </button>
                <button className="flex items-center bg-indigo-600 text-white px-5 py-2 rounded-md font-medium hover:bg-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Apply Now
                    <FiArrowUpRight className="ml-2" />
                </button>

            </div>

            {/* Enhanced Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
                <button
                    className="relative group focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Menu"
                >
                    <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200">
                        {/* Animated Hamburger Icon */}
                        {!mobileMenuOpen ? (
                            <HiOutlineMenuAlt3
                                className="text-gray-700 group-hover:text-green-600 transition-colors duration-200"
                                size={28}
                            />
                        ) : (
                            <FiX
                                className="text-gray-700 group-hover:text-green-600 transition-colors duration-200"
                                size={28}
                            />
                        )}
                        {/* Circular background on hover */}
                        <div className="absolute w-full h-full rounded-full bg-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-white z-50 mt-16 overflow-y-auto">
                    <div className="px-6 py-4 space-y-1">
                        {navItems.map((item) => (
                            <div key={item.key} className="relative">
                                <button
                                    className={`flex items-center justify-between w-full text-lg font-medium px-4 py-3 rounded-lg transition-all duration-200 ${activeDropdown === item.key
                                        ? "text-green-600 bg-green-50"
                                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                        }`}
                                    onClick={() => {
                                        if (item.key !== "blog") {
                                            setActiveDropdown(activeDropdown === item.key ? null : item.key);
                                        }
                                    }}
                                >
                                    <div className="flex items-center">
                                        {React.cloneElement(item.icon, { className: "mr-3 text-lg" })}
                                        <span>{item.label}</span>
                                    </div>
                                    {item.key !== "blog" && (
                                        <FiChevronDown className={`transition-transform duration-200 ${activeDropdown === item.key ? "transform rotate-180" : ""
                                            }`} />
                                    )}
                                </button>

                                {activeDropdown === item.key && item.key !== "blog" && (
                                    <div className="pl-14 pr-4 py-2 bg-gray-50 rounded-lg">
                                        <DropdownMenu type={item.key} mobile />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="px-6 py-4 border-t border-gray-100 space-y-3 mt-2">
                        <button className="w-full flex items-center justify-center text-base font-medium text-gray-600 hover:text-green-600 px-4 py-3 rounded-lg hover:bg-green-50 transition-colors duration-200">
                            <FiUser className="mr-3" />
                            Login
                        </button>
                        <button className="flex items-center bg-indigo-600 text-white px-5 py-2 rounded-md font-medium hover:bg-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Apply Now
                            <FiArrowUpRight className="ml-2" />
                        </button>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;