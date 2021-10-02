import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Usecart from '../../Hooks/UseCart';
import Useproduct from '../../Hooks/UseProduct';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';

import ReviewItem from '../ReviewItem/ReviewItem';



const Review = () => {
    const [products]=Useproduct()
    const [cart,setCart]=Usecart(products)
    
    const hsitory=useHistory()
    const handleRemove=(key) => {
        const newCart=cart.filter(product=>product.key !==key)
        setCart(newCart)
        removeFromDb(key)
    }
    const handlePleaseOrder=()=>{
        hsitory.push('/pleaseOrder')
        // for tha cart and data base clear 
        setCart([])
        clearTheCart()
    }
//    const result=products.length
    return (
        <div className="shop-container">


         <div className="product-container">
             {
                 cart.map(product=><ReviewItem product={product}handleRemove={handleRemove}></ReviewItem>)
             }

         </div>
         <div className="cart-container">
                    <Cart cart={cart}> 
                   <button onClick={handlePleaseOrder} className='btn-regular'> Please Order</button>
                    
                     </Cart>
                </div>
        </div>
    );
};

export default Review;