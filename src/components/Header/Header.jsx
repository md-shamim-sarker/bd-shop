import {faBars, faCartShopping, faHamburger, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-pink-700 text-pink-50">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12 text-2xl font-black">
                        <Link to={"/"}>
                            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                            <h2 className='inline-block ml-3'>BD SHOP</h2>
                        </Link>
                    </div>
                    <div className="md:flex md:items-center md:gap-12">
                        <nav className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li className='hover:underline'><Link to={"/home"}>Home</Link></li>
                                <li className='hover:underline'><Link to={"/products"}>Products</Link></li>
                                <li className='hover:underline'><Link to={"/orders"}>Orders</Link></li>
                                <li className='hover:underline'><Link to={"/about"}>About</Link></li>
                                <li className='hover:underline'><Link to={"/profile"}>Profile</Link></li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <Link>
                                    <div className="rounded-md bg-pink-100 px-5 py-2 text-sm font-medium text-pink-700">
                                        Login
                                    </div>
                                </Link>
                            </div>

                            <div className="block md:hidden text-2xl">
                                <button className="rounded p-2 transition">
                                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;