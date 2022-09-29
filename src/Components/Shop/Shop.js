import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

  const Shop = () => {
   const [products,setProducts]=useState([]);

   return (
    <div className='shop_conatiner'>
     <div className="products_container">
        {
          products.map(product=><Product
           key={product._id}
           product={product}
          
          ></Product>)
        }
     </div>
     <div className="cart-container">
      <Cart
      
      ></Cart>
     </div>
   </div>
);
};

export default Shop;