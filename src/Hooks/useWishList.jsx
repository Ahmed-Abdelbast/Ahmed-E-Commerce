import { useQuery } from '@tanstack/react-query';
import axios from 'axios'

import  Cookies  from 'js-cookie';

export default function useWishList() {




    async function GetWishList(){



        return await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",{
              headers:{
                  token: Cookies.get("userToken")
              }
          })
          
      }
      
    const resultWishList =  useQuery({
        queryKey:["WhishListProduct"],
        queryFn:GetWishList
      })
  return resultWishList
}
