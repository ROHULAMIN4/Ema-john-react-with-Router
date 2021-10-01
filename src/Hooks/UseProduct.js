import { useEffect } from "react"
import { useState } from "react"

const Useproduct=()=>{
    const [products,setProduct]=useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                
            });
    }, []);
    return  [products]
}
export default Useproduct