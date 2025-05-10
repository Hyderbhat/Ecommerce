import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bars3Icon, MagnifyingGlassIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline';
import CartButton from './CartButton';

const Header = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isShopSubMenuOpen, setIsShopSubMenuOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);
    const toggleShopMenu = () => setIsShopSubMenuOpen(!isShopSubMenuOpen);

    return (
        <nav className='flex gap-10 justify-around lg:items-baseline text-white absolute top-0 left-0 w-full z-10 bg-transparent'>
            <div className="flex h-25 gap-10 items-center lg:items-end text-sm shadow-text">
                <div className='hidden lg:flex gap-10'>
                    <div>
                        <Link to="/" className='hover:text-[#C71C38]' style={{ fontFamily: 'Montserrat', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>HOME</Link>
                    </div>
                    <div className="relative group">
                        <div
                            className="hover:text-[#C71C38] block transition-colors duration-200 cursor-pointer"
                            style={{ fontFamily: 'Montserrat', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
                        >
                            SHOP
                        </div>
                        <ul
                            className="absolute left-0 top-full invisible opacity-0 transform translate-y-5 
                                flex flex-col min-w-40 py-3 px-4 text-md bg-white shadow-md 
                                text-gray-600 z-10 rounded-sm
                                group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 
                                transition-all duration-300 ease-in-out"
                        >
                            <li className="py-2 hover:text-[#C71C38] transition-colors duration-200">
                                <Link to="men">Men</Link>
                            </li>
                            <li className="py-2 hover:text-[#C71C38] transition-colors duration-200">
                                <Link to="women">Women</Link>
                            </li>
                            <li className="py-2 hover:text-[#C71C38] transition-colors duration-200">
                                <Link to="kicks">Kicks</Link>
                            </li>
                            <li className="py-2 hover:text-[#C71C38] transition-colors duration-200">
                                <Link to="summerSpring">Summer & Spring Collection</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="gifts" className='hover:text-[#C71C38]' style={{ fontFamily: 'Montserrat', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>GIFTS</Link>
                    <Link to="about" className='hover:text-[#C71C38]' style={{ fontFamily: 'Montserrat', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>ABOUT</Link>
                </div>
                <div>
                    <Link to={"/"}><p className='text-3xl font-extrabold font-[cursive] cursor-pointer' style={{ fontFamily: 'Montserrat', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>HyShops.</p></Link>
                </div>
            </div>

            <div className='flex gap-5 items-center cursor-pointer'>
                <MagnifyingGlassIcon className="h-6 w-6 hover:text-[#C71C38]" />
                <UserIcon className="h-6 w-6 hover:text-[#C71C38]" onClick={() => navigate("/login")} />
                <CartButton />
            </div>

            {/* Mobile Menu Button */}
            <div className='lg:hidden mt-9'>
                <button
                    className="text-white flex items-center"
                    onClick={toggleMenu}
                    aria-label="Toggle mobile menu"
                >
                    <Bars3Icon className="h-6 w-6" />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20"
                    onClick={closeMenu}
                />
            )}

            {/* Mobile Menu Panel */}
            <div
                className={`fixed left-0 top-0 h-full w-3/4 max-w-xs bg-white text-black z-30 shadow-xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <span className="text-xl font-bold text-gray-900">HyShops.</span>
                    <button
                        onClick={closeMenu}
                        aria-label="Close menu"
                    >
                        <XMarkIcon className="h-6 w-6 text-gray-500" />
                    </button>
                </div>

                <div className="flex flex-col p-2">
                    <Link
                        to="/"
                        className="py-3 px-2 border-b border-gray-100 hover:text-[#C71C38] transition-colors duration-200"
                        onClick={closeMenu}
                    >
                        Home
                    </Link>

                    <div className="py-3 px-2 border-b border-gray-100">
                        <div
                            className="flex justify-between items-center hover:text-[#C71C38] transition-colors duration-200 cursor-pointer"
                            onClick={toggleShopMenu}
                        >
                            <span>Shop</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-4 w-4 transition-transform duration-200 ${isShopSubMenuOpen ? 'transform rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        {/* Shop submenu */}
                        <div
                            className={`pl-4 mt-2 flex flex-col space-y-2 transition-all duration-200 overflow-hidden ${isShopSubMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <Link
                                to="/men"
                                className="py-2 text-gray-600 hover:text-[#C71C38] transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                Men
                            </Link>
                            <Link
                                to="/women"
                                className="py-2 text-gray-600 hover:text-[#C71C38] transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                Women
                            </Link>
                            <Link
                                to="/kicks"
                                className="py-2 text-gray-600 hover:text-[#C71C38] transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                Kicks
                            </Link>
                            <Link
                                to="/summerSpring"
                                className="py-2 text-gray-600 hover:text-[#C71C38] transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                Summer & Spring Collection
                            </Link>
                        </div>
                    </div>

                    <Link
                        to="/gifts"
                        className="py-3 px-2 border-b border-gray-100 hover:text-[#C71C38] transition-colors duration-200"
                        onClick={closeMenu}
                    >
                        Categories
                    </Link>

                    <Link
                        to="/about"
                        className="py-3 px-2 border-b border-gray-100 hover:text-[#C71C38] transition-colors duration-200"
                        onClick={closeMenu}
                    >
                        About
                    </Link>

                    {/* Mobile menu icons */}
                    <div className="mt-4 px-2 flex justify-around">
                        <button className="p-2 rounded-full hover:bg-gray-100">
                            <MagnifyingGlassIcon className="h-6 w-6 text-gray-700 hover:text-[#C71C38]" />
                        </button>
                        <button className="p-2 rounded-full hover:bg-gray-100" onClick={() => { navigate("/login"); closeMenu(); }}>
                            <UserIcon className="h-6 w-6 text-gray-700 hover:text-[#C71C38]" />
                        </button>
                        <CartButton />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;