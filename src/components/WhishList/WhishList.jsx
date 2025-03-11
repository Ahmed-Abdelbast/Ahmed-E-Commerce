// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
// import HomeProducts from '../HomeProducts/HomeProducts'
// import useWishList from '../../Hooks/useWishList';
import axios from 'axios';
import  Cookies from 'js-cookie';
import { AddWhishlist } from '../../context/AddToWhishlist';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export default function WhishList() {
 const { GetWishList }  = useContext(AddWhishlist);

//  console.log(wishList);
 

 



//   const resultWishList = useWishList()

//       console.log(resultWishList);
// const [result,setresult]  =useState(resultWishList)
const resultWishList =  useQuery({
  queryKey:["WhishListProduct"],
  queryFn:GetWishList
})
const [wishList,setwishList] =useState(resultWishList);



      function removeFromWishList(id){

      return  axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{
          headers:{
            token: Cookies.get('userToken')
          }
        })
        .then(()=>{

          toast.success("Product Removed Success")
          
          setwishList(resultWishList);
          console.log(resultWishList);
          
          
        })
        .catch(()=>{
          toast.error("Product Removed Faild")
        })
      }
      



  return (
    <>
            <div className="w-[80%] mx-auto my-25">
            <div className=" text-[#F43F5E] flex gap-5 align-middle">
              <h1 className="w-4 rounded-sm h-10 bg-[#F43F5E]"></h1>
              <p className="translate-y-2">Wish List</p>
            </div>
            <div className="py-2">
              <h1 className="text-4xl">Wish List :</h1>
            </div>
          </div>




              <div className="w-[80%]  mx-auto my-12">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 gap-15">
                    {wishList?.data?.data?.data ?  
                     wishList?.data?.data?.data?.map((product)=>{ return  <div key={product.id} className=" rounded-sm relative group">
                          <div className="group-hover:scale-105 duration-500">
                          <div className="text-centerv relative overflow-hidden ">
                                    <img src={product?.imageCover} className="group-hover:scale-120 duration-500" alt="" />
                                    <i onClick={function (){removeFromWishList(product.id)}} className="fas fa-trash bg-black hover:bg-transparent hover:text-green-600 hover:text-2xl text-white p-2 rounded-4xl  absolute cursor-pointer top-2 end-0"></i>
                                    {/* <i onClick={function (){AddToWhishlist(product.id)}} className="fa-solid fa-trash bg-black hover:bg-transparent hover:text-green-600 hover:text-2xl text-white p-2 rounded-4xl  absolute cursor-pointer top-15 end-0"></i> */}
                                    
                                    
                                  </div>
                      
                                  <h3>
                                    {product?.title !==null  ? product?.title.split(" ").slice(0,2).join(" ") :"0"}
                                  </h3>
                                  <div className="flex justify-between pb-6">
                                  <p className="text-[#F43F5E]">{product?.price}$</p>
                                  <p><i className="fas fa-star text-yellow-300"></i> {product?.ratingsAverage}</p>
                                  </div>
                                  <button  className="bg-black text-white p-2 w-full cursor-pointer"><i className="fas fa-shopping-cart"></i> Add Cart</button>
                          </div>
                      
                      
                                </div>  }): "" }
                  </div>
          
          

                </div>
    
    
    
    
    </>
  )
}
