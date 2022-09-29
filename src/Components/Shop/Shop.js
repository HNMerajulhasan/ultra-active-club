import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import WebpageName from '../WebpageName/WebpageName';
import './Shop.css';
const Shop = () => {
const [products,setProducts]=useState([]);
const [cart,setCart]=useState([]); 
const[timeBreak,setTimeBreak]=useState(0);

const savedTimeBreak=localStorage.getItem('breakTime');
const addTimeBreak=(breakTime)=>{
  setTimeBreak(breakTime);
  localStorage.setItem('breakTime',breakTime)
}


useEffect(()=>{
    fetch('data.json')
      .then(res=>res.json())
      .then(data=>setProducts(data))
},[])

const handleAddToCart=(product)=>{ 
  console.log(product);
  const newCart=[...cart,product]
  setCart(newCart);
}

    return (
      <div>
         
           <WebpageName></WebpageName>
        
        <div className='shop_conatiner'>
          
         <div className="products_container">
         
            {
              products.map(product=><Product
               key={product._id}
               product={product}
               handleAddToCart={handleAddToCart}
              ></Product>)
            }
         </div>
         <div className="cart-container">
          <Cart cart={cart}
          addTimeBreak={addTimeBreak}
          timeBreak={savedTimeBreak}
          ></Cart>
         </div>
       </div>
       </div>
    );
};

export default Shop;