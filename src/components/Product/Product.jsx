import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

const Product = ({product}) => {
    const {img, name, price} = product;
    return (
        <div className='border p-5'>
            <img src={img} alt="img_product" />
            <h2 className='text-2xl bolder'>{name}</h2>
            <p>Price: $ {price}</p>
            <button className='btn-shop text-sm'>
                <span className='mr-3'>Add To Cart</span>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;