/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import axios from 'axios';
import  { createContext, useState } from 'react'
import Cookies  from 'js-cookie';





export const AddCart = createContext();





export default function AddToCartProvider({children}) {
  

  


const [numOfProd,setNumOfProd]  = useState(0)
const [cartId,setCartId]  = useState(null)
    function AddToCart(id){



      return  axios.post("https://ecommerce.routemisr.com/api/v1/cart",{
            productId: id
        },{
            headers:{
                token: Cookies.get("userToken")
            }
        })
        .then((res)=>{
          setNumOfProd(res?.data?.numOfCartItems)
          setCartId(res?.data?.cartId)
          console.log(res);
          
        })
      

    } 






    
  return <>


  <AddCart.Provider value={{
    AddToCart,
    numOfProd,
    setNumOfProd,
    cartId,
    setCartId
   
   
    
  }}>
    {children}
  </AddCart.Provider>
  
  
  
  
  </>
}
