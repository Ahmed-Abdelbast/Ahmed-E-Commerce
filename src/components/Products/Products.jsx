// eslint-disable-next-line no-unused-vars
import React from 'react'

import HomeProducts from '../HomeProducts/HomeProducts'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
// import { BeatLoader } from 'react-spinners'

export default function Products() {

  function getProduct(){
    return axios.get("https://ecommerce.routemisr.com/api/v1/products")
   
    }

    const {data,isLoading} = useQuery({
        queryKey:["product"],
        queryFn:getProduct
       })


  //  const {data,isLoading}= useProducts()
   if(isLoading){
    return <>
    <div className="text-green-600 h-screen flex flex-col text-3xl justify-center items-center">
      <p>please Wait</p>
      <p><i className="fas fa-spin fa-spinner text-4xl"></i></p>
    </div>
    
    
    </>
  }
  return (
    <>

   

          <div className="w-[80%] mx-auto my-25">
            <div className=" text-[#F43F5E] flex gap-5 align-middle">
              <h1 className="w-4 rounded-sm h-10 bg-[#F43F5E]"></h1>
              <p className="translate-y-2">Products</p>
            </div>
            <div className="py-2">
              <h1 className="text-4xl">All products :</h1>
            </div>
          </div>
    
    
          <div className="w-[80%]  mx-auto my-12">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-15">
              {data?.data.data  ?  
                   data?.data.data.map((product)=>{ return <HomeProducts key={product.id}  product={product} /> }): ""
              }
            </div>
          </div>
    
    
    </>
  )
}
