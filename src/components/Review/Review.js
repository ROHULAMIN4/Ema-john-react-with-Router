import React from 'react';
import Usecart from '../../Hooks/UseCart';
import Useproduct from '../../Hooks/UseProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';

import ReviewItem from '../ReviewItem/ReviewItem';



const Review = () => {
    const [products]=Useproduct()
    const [cart,setCart]=Usecart(products)
    
    
    const handleRemove=(key) => {
        const newCart=cart.filter(product=>product.key !==key)
        setCart(newCart)
        removeFromDb(key)
    }
//    const result=products.length
    return (
        <div className="shop-container">


         <div className="product-container">
             {
                 cart.map(product=><ReviewItem product={product}handleRemove={handleRemove}> </ReviewItem>)
             }

         </div>
         <div className="cart-container">
                    <Cart cart={cart}  ></Cart>
                </div>
        </div>
    );
};

export default Review;