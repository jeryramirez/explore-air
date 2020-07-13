import React from 'react';

import product from './product-3.png'

import './product.style.css'

const Product = () => {
    return ( 
        <div className='productCard'>
            <img className='product' src={product} alt=""/>
        </div>
    );
}
 
export default Product;