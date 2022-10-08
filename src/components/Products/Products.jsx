import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Products = () => {
    const products = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-5'>
            <div className='w-11/12 col-span-4 grid grid-cols-1 md:grid-cols-3 m-5 mx-auto gap-5'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='bg-pink-500 hidden md:block h-screen sticky top-0 text-pink-50 p-4'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Products;