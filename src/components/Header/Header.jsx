import {faAddressCard, faCartPlus, faCartShopping, faGuitar, faHome, faUserAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-pink-700 text-pink-50 py-5'>
            <div className='w-4/5 mx-auto flex items-center justify-between'>
                <div className='flex items-center gap-x-3 text-2xl font-extrabold'>
                    <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                    <div>BD SHOP</div>
                </div>
                <div className='flex gap-x-5'>
                    <nav className='hidden lg:flex gap-x-5'>
                        <Link to={"/home"}>Home</Link>
                        <Link to={"/products"}>Products</Link>
                        <Link to={"/orders"}>Orders</Link>
                        <Link to={"/about"}>About</Link>
                    </nav>
                    <div className='flex gap-x-5'>
                        <div className='relative'>
                            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                            <small className='bg-pink-50 text-pink-700 rounded-full px-1 absolute bottom-3 left-3'>
                                5
                            </small>
                        </div>
                        <div className='hidden md:block'>
                            <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>

            <nav className=' bg-pink-700 w-full flex lg:hidden fixed bottom-0 justify-around text-2xl py-3'>
                <Link to={"/home"}>
                    <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                </Link>
                <Link to={"/products"}>
                    <FontAwesomeIcon icon={faGuitar}></FontAwesomeIcon>
                </Link>
                <Link to={"/orders"}>
                    <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                </Link>
                <Link to={"/about"}>
                    <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
                </Link>
                <Link>
                    <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>
                </Link>
            </nav>
        </header>
    );
};

export default Header;