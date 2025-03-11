// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';

import useGetCart from '../../Hooks/useGetCart';
import axios from 'axios';

// import slide5 from '../../assets/lap.jpg'
import  Cookies  from 'js-cookie';
import { AddCart } from '../../context/AddToCart';
import { Link } from 'react-router-dom';

export default function Cart() {
const {setNumOfProd ,setCartId ,cartId}  =  useContext(AddCart);
const resultCart = useGetCart()
console.log(resultCart);

 const [resultCart1,setresultCart1] =useState(resultCart?.data);
//  setresultCart1(resultCart?.data)
console.log(resultCart1);
setCartId(resultCart1?.data?.cartId)
console.log(cartId);



 

//  function incrementCount(){
//   setCountNum(countNum + 1)
 
//  } 
//  function decrementCount(){
//    setCountNum(countNum - 1)
//    console.log(countNum);
//    return countNum

   
//  } 

function deletProduct(id){

  return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
    headers:{
      token:Cookies.get("userToken")
    }
  })
  .then((res)=>{
    console.log(res?.data);
    setresultCart1(res)
    setNumOfProd(res?.data?.numOfCartItems)
  })

}


  function Count(id,num){

   return  axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
     
    count: num
   
     
    },{

      headers:{
        token: Cookies.get("userToken")
      }
      
    })
    .then((res)=>{
      console.log(res?.data?.data?.products);
      setresultCart1(res)
      
    


    })
  }

//  async function all (id){
//     decrementCount();
//     await Count(id)
//   }





// const {resultCart}=  useContext(AddCart);


  return <>

        <div className="w-[80%] mx-auto my-25">
            <div className=" text-[#F43F5E] flex gap-5 align-middle">
              <h1 className="w-4 rounded-sm h-10 bg-[#F43F5E]"></h1>
              <p className="translate-y-2">Cart</p>
            </div>
            <div className="py-2">
              <h1 className="text-4xl">Shopping Cart :</h1>
            </div>
          </div>



          





{/* <div className="relative overflow-x-auto sm:shadow-2xl w-[80%] mx-auto">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

    <tbody>


      {resultCart ? resultCart?.data?.data?.data?.products?.map((product)=>{return       <tr key={product._id} className="bg-white  ">
        <td className="p-4 w-70">
          <img src={product.product.imageCover} className="w-full max-w-full max-h-full" alt="Apple iMac" />
        </td>
        <td className="pl-6 py-4 font-semibold text-gray-900 ">
          {product.product.title}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <button className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 cursor-pointer text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 " type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>
            <div className="ms-3">
              <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={1} required />
            </div>
            <button className="inline-flex items-center justify-center h-6 w-6 cursor-pointer p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 " type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          $2499
        </td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
        </td>
      </tr>}) : "" }



    </tbody>
  </table>
</div> */}




















<div className="font-sans md:w-[80%] mx-auto p-4">
  <h1 className="text-2xl font-bold text-gray-800">Your Cart</h1>
  <div className="grid md:grid-cols-3 gap-4 mt-8">
    <div className="md:col-span-2 space-y-4">



      {resultCart1 ? resultCart1?.data?.data?.products?.map((product)=>{return   <div key={product._id} className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(61,63,68,0.3)]">
        <div className="flex gap-4">
          <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
            <img src={product?.product?.imageCover} className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-gray-800">{product?.product?.title.split(" ").slice(0,2).join(" ")}</h3>
              <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">Brand : <span className="text-green-800">{product?.product?.brand?.name}</span></p>
            </div>
            <div className="mt-auto flex items-center gap-3">
              <button onClick={function (){ Count(product?.product?.id,product?.count-1) }} type="button" className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 124 124">
                  <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
                </svg>
              </button>
              <p className="font-bold text-sm leading-[18px]">{ product?.count}</p>
              <button onClick={function (){ Count(product?.product?.id ,  product?.count+1) }} type="button" className="flex items-center justify-center w-5 h-5 bg-gray-800 outline-none rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 42 42">
                  <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="ml-auto flex flex-col">
          <div className="flex items-start gap-4 justify-end">

            <button className="w-4 h-4 cursor-pointer fill-gray-400 hover:text-red-600 inline-block">
              <i  className="fa-regular fa-heart "></i>
            </button>



            <button onClick={function(){deletProduct(product?.product?.id)}} className="w-4 h-4 cursor-pointer fill-gree-400 hover:text-red-600 inline-block">
            <i className="fa-solid fa-trash"></i>
            </button>

          </div>
          <h3 className="text-sm sm:text-base font-bold text-red-400 mt-auto">${product?.price}</h3>
        </div>
      </div>
      }) :""  }








    </div>
    <div className="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(61,63,68,0.3)]">
      <ul className="text-gray-800 space-y-4">
        <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-bold">${resultCart1?.data?.data?.totalCartPrice}.00</span></li>
        <li className="flex flex-wrap gap-4 text-sm">Shipping <span className="ml-auto font-bold">Free</span></li>
        <li className="flex flex-wrap gap-4 text-sm">Tax <span className="ml-auto font-bold">$0.00</span></li>
        <hr className="border-gray-300" />
        <li className="flex flex-wrap gap-4 text-sm font-bold">Total <span className="ml-auto">${resultCart1?.data?.data?.totalCartPrice}.00</span></li>
      </ul>
      <div className="mt-8 space-y-2 ">
        <Link to={"/payment"}  ><button className="cursor-pointer text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md">Buy Now</button></Link>
       <Link to={"/products"}> <button type="button" className="cursor-pointer text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md">Continue Shopping</button></Link>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <img src="https://readymadeui.com/images/master.webp" alt="card1" className="w-10 object-contain" />
        <img src="https://readymadeui.com/images/visa.webp" alt="card2" className="w-10 object-contain" />
        <img src="https://readymadeui.com/images/american-express.webp" alt="card3" className="w-10 object-contain" />
      </div>
    </div>
  </div>
</div>






  
     
  
  
  
  </>
}
