import { useState } from 'react';
import logo from '../../assets/images/dog-solid-24.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-blue-900 text-white sticky top-0 z-50 shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <a href="/public" className="flex items-center">
                    <img src={logo} alt="Maki Security Logo" className="w-10 h-10 mr-3" />
                    <span className="text-lg font-semibold">Maki Security Consultancy</span>
                </a>

                {/* Navigation */}
                <nav
                    className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-blue-900 p-6 transition-transform duration-300 md:static md:w-auto md:p-0 md:flex md:items-center ${
                        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
                        <li>
                            <a href="/" className="text-white hover:text-blue-300">
                                Chat
                            </a>
                        </li>
                        <li>
                            <a href="/home" className="text-white hover:text-blue-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/public#approach" className="text-white hover:text-blue-300">
                                Our Approach
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="text-white hover:text-blue-300">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 md:ml-6 md:mt-0">
                        Get a Quote
                    </button>
                </nav>

                {/* Hamburger Icon */}
                <button
                    className="flex flex-col justify-between w-6 h-6 md:hidden"
                    onClick={toggleMenu}
                >
                    <span className="h-1 w-full bg-white rounded"></span>
                    <span className="h-1 w-full bg-white rounded"></span>
                    <span className="h-1 w-full bg-white rounded"></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
