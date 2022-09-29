import React from 'react';
import './Product.css';

//  const WebPageName = () => {
//      return (
//          <div className='extra_task'>
//           dfsdgsh
//          </div>
//      );
//  };

const Product = (props) => {
 const {name,age,img,time}=props.product; 
 const{handleAddToCart,product}=props;
    return (
        <div className='product_container'>
            <img src={img} alt=''/>
           <div className='product_info'>
              <p className='product_name'>{name}</p>
              <p>Age: {age}</p>
              <p>Time-Reqiure: {time}</p>
           </div> 
           
         <button  onClick={()=>handleAddToCart(product)} className='btn_cart'>
             <p className='btn_text'>Add To List</p>
         </button>

        </div>
       
    );
};

export  default Product;