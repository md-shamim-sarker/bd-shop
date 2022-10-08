import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import banner from '../../assets/banner.jpg';

const Home = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center px-5'>
            <div className='order-2 lg:order-1'>
                <h2 className='text-4xl text-pink-700 font-bold hidden md:block'>Welcome To BD SHOP</h2>
                <h2 className='text-4xl text-pink-700 font-bold md:hidden'>Welcome To <br /> BD SHOP</h2>
                <p className='text-lg my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus neque odio, unde molestias voluptates pariatur sint voluptate. Quaerat, voluptatibus commodi!</p>
                <button className='btn-shop mb-7 lg:mb-0'>
                    <span className='mr-3'>Shop Now</span>
                    <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                </button>
            </div>
            <div className='order-1 lg:order-2'>
                <img className='w-full' src={banner} alt="banner_image" />
            </div>
        </div>
    );
};

export default Home;