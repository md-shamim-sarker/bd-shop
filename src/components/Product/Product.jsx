import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

const Product = ({product}) => {
    const {img, name, price} = product;
    return (
        <div className='border p-5 shadow-lg rounded-lg'>
            <img className='w-full' src={img} alt="img_product" />
            <h2 className='text-2xl font-semibold'>{name}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti a at praesentium voluptatem debitis atque!</p>
            <p className='my-3 font-bold'>Price: $ {price}</p>
            <button className='btn-shop text-sm w-full'>
                <span className='mr-3'>Add To Cart</span>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;