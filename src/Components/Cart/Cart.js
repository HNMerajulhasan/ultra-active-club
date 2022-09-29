import React from 'react';
import './Cart.css';
import MyImage from './gym.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({cart,addTimeBreak,timeBreak}) => {


  const notify=()=>toast("Congratulions!! You have done your activity. Keep doing...",{position:"top-center",theme:"dark"});

    let time=0;
    for(const product of cart) {
        time=time+product.time
    }
  

    return (
        <div className='full_sidebar'>
            <div className='img_name'>
              <img src={MyImage} alt=""/>
              <h4>H.M Merajul Hasan</h4>
            </div>
            <div className='personal_info'>
                <h3>70kg</h3>
                <h3>5.9"</h3>
                <h3>23yrs</h3>
            </div>
            <div className='add_break'>
               <h4>Add a Break</h4>
                <button onClick={()=>addTimeBreak(10)} className='btn-1'>
                  <p>10</p>
                </button> 
                <button onClick={()=>addTimeBreak(20)} className='btn-1'>
                  <p>20</p>
                </button> 
                <button onClick={()=>addTimeBreak(30)} className='btn-1'>
                  <p>30</p>
                </button> 
                <button onClick={()=>addTimeBreak(40)} className='btn-1'>
                  <p>40</p>
                </button> 
                <button onClick={()=>addTimeBreak(50)} className='btn-1'>
                  <p>50</p>
                </button> 
            </div>

          <div className='exercise_details'>
             <h2>Exerxise Details</h2> 
             <h4><span className='exer_time'>Exercise Time :</span><span className='added_time'> {time} </span>  seconds</h4>
          </div> 
            
          <div className='break_time'>
            <h2>Break Time : {timeBreak} seconds</h2>
          </div> 
            
         <div>
            <button  onClick={notify} className='act_comp_toast'>
                <p>Activity Completed</p>
            </button>
            <ToastContainer />


        </div> 

        </div>
    );
};

export default Cart;