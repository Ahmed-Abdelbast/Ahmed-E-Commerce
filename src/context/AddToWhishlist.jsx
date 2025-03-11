/* eslint-disable react/prop-types */

import axios from 'axios';
import { createContext, useEffect, useState } from 'react'
import  Cookies  from 'js-cookie';
import { useQuery } from '@tanstack/react-query';
// eslint-disable-next-line react-refresh/only-export-components
export const AddWhishlist = createContext()

export default function AddToWhishlist({children}) {


    function AddToWhishlist(id){
        return  axios.post("https://ecommerce.routemisr.com/api/v1/wishlist",{
              productId: id
          },{
              headers:{
                  token: Cookies.get("userToken")
              }
          })
          .then((res)=>{
            // setNumOfProd(res?.data?.numOfCartItems)
            console.log(res);
            
          })
        
  
      } 

    //   get wishList

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
  const [wishList, setWishList] = useState( resultWishList)
    //   useEffect(()=>{
        
    //     setWishList(resultWishList)

    //   },[])

    //   setWishList(resultWishList)





  return (
    <>

    <AddWhishlist.Provider value={{
        AddToWhishlist,
        setWishList,
        resultWishList,
        GetWishList ,
        
        wishList
        
    }}>
        {children}
    </AddWhishlist.Provider>
    
    
    
    </>
   
  )
}
