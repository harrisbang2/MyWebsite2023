import React from 'react'
import './product.css'
import Logo from "./Amazon_logo.png";
function Product() {
  return (
    <div className='product'>
      <div className='product_info'>
        <p>The lean Startup</p>
        <p className='product_price'><small>$</small><strong>19.99</strong></p>
        <div className='product_rating'>
        <p>⭐</p>
        </div>
      </div>
      <img src={Logo} />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product
