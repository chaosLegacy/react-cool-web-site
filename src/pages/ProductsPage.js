import React from 'react';
import '../App.css';
import { Fade } from 'react-reveal';

const ProductsPage = () => {
    return <div className="products"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/5592613/pexels-photo-5592613.jpeg?auto=compress&cs=tinysrgb)' }}>
        <Fade big>
            <h4>PRODUCTS</h4>
        </Fade>
    </div>
}

export default ProductsPage
