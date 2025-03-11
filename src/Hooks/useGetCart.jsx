
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'

import  Cookies  from 'js-cookie';

export default function useGetCart() {

  function GetCart(){



    return  axios.get("https://ecommerce.routemisr.com/api/v1/cart",{
          headers:{
              token: Cookies.get("userToken")
          }
      })
      
  }
  
const resultCart =  useQuery({
    queryKey:["cartProduct"],
    queryFn:GetCart
  })





    
  return resultCart
   
  
}
