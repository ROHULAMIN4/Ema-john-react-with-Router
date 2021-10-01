import { useEffect } from "react";
import { useState } from "react";

import { getStoredCart, } from "../utilities/fakedb";

const Usecart=products=>{
    const [cart,setCart]=useState([])
    useEffect(()=>{
        if(products.length){
            const savedCart=getStoredCart()
            const storCart=[]
            for(const key in savedCart){
                const addedProduct=products.find(product=>product.key===key)
                if(addedProduct){
                    const quantity=savedCart[key]
                    addedProduct.quantity=quantity
                    storCart.push(addedProduct)
                }
            }
            setCart(storCart)
        }
    },[products])
    return [cart,setCart]
}
export default Usecart