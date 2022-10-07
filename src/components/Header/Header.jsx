import {faBars, faCartShopping, faHamburger, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-pink-700 text-pink-100 py-4'>
            <div className='w-4/5 mx-auto flex justify-between items-center'>
                <div className='text-2xl font-extrabold'>
                    <Link className='hover:text-pink-300 hover:underline' to={"/"}>
                        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                        <h2 className='inline-block ml-3'>BD-SHOP</h2>
                    </Link>
                </div>
                <nav className='hidden lg:flex gap-x-5 items-center'>
                    <Link className='hover:text-pink-300 hover:underline' to={"/home"}>Home</Link>
                    <Link className='hover:text-pink-300 hover:underline' to={"/products"}>Products</Link>
                    <Link className='hover:text-pink-300 hover:underline' to={"/orders"}>Orders</Link>
                    <Link className='hover:text-pink-300 hover:underline' to={"/about"}>About</Link>
                    <Link className='hover:text-pink-300 hover:underline' to={"/profile"}>
                        <div className='text-2xl' title='Profile'>
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        </div>
                    </Link>
                </nav>

                <nav className='hover:text-pink-300 block lg:hidden'>
                    <Link>
                        <div className='text-2xl' title='Profile'>
                            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                        </div>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;