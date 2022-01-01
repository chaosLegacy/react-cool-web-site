import React from 'react';
import '../App.css';
import { Fade } from 'react-reveal';

const ProductsPage = () => {
    return <div className="products"
        style={{ backgroundImage: 'url(images/img-1.jpg)' }}>
        <Fade big>
            <h4>PRODUCTS</h4>
        </Fade>
    </div>
}

export default ProductsPage
