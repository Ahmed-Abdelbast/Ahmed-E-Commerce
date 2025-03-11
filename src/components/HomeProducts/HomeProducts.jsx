/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import { AddCart } from '../../context/AddToCart'
import toast from 'react-hot-toast';
// import { AddWhishlist } from '../../context/AddToWhishlist';
import { AddWhishlist } from './../../context/AddToWhishlist';


export default function HomeProducts({product}) {

 const {AddToCart}= useContext(AddCart);
 const {AddToWhishlist}= useContext(AddWhishlist);
//  const {AddToWhishlist}= useContext(AddWhishlist);





 
 

 function cart(){
  AddToCart(product.id).then(()=>{
    toast.success("Product added successfully to your cart")
    
    

    
    
  }).catch(()=>{
    toast.error("Faild To added Product to your cart")
  })
 }

 function WishList(){
  AddToWhishlist(product.id)
  .then(()=>{
    
    
    toast.success("Product added successfully to your WishList")
    
    

    
    
  }).catch(()=>{
    toast.error("Faild To added Product to your WishList")
  })
 }

  




 
    
  return (
    <>


<div className=" rounded-sm relative group">
    <div className="group-hover:scale-105 duration-500">
    <div className="text-centerv relative overflow-hidden ">
              <img src={product?.imageCover} className="group-hover:scale-120 duration-500" alt="" />
              <i onClick={function (){WishList()}} className="fas fa-heart bg-black hover:bg-transparent hover:text-green-600 hover:text-2xl text-white p-2 rounded-4xl  absolute cursor-pointer top-2 end-0"></i>
              {/* <i onClick={function (){AddToWhishlist(product.id)}} className="fa-solid fa-trash bg-black hover:bg-transparent hover:text-green-600 hover:text-2xl text-white p-2 rounded-4xl  absolute cursor-pointer top-15 end-0"></i> */}
              
              
            </div>

            <h3>
              {product?.title !==null  ? product?.title.split(" ").slice(0,2).join(" ") :"0"}
            </h3>
            <div className="flex justify-between pb-6">
            <p className="text-[#F43F5E]">{product?.price}$</p>
            <p><i className="fas fa-star text-yellow-300"></i> {product?.ratingsAverage}</p>
            </div>
            <button onClick={cart} className="bg-black text-white p-2 w-full cursor-pointer"><i className="fas fa-shopping-cart"></i> Add Cart</button>
    </div>


          </div>
    
    
    
    
    
    
    
    </>
  )
}
