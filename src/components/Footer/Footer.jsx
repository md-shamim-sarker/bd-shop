import {faCopyright} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-pink-700 text-pink-100 text-center py-8'>
            <div>
                <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>
                <span className='ml-2'>All Rights Reserved | Md. Shamim Sarker | 2022</span>
            </div>
            <div className='flex gap-x-5 justify-center mb-10 md:mb-0 mt-5 text-lg'>
                <i className="hover:text-pink-300 fa-brands fa-square-facebook"></i>
                <i className="hover:text-pink-300 fa-brands fa-square-twitter"></i>
                <i className="hover:text-pink-300 fa-brands fa-linkedin"></i>
                <i className="hover:text-pink-300 fa-brands fa-square-github"></i>
            </div>
        </div>
    );
};

export default Footer;