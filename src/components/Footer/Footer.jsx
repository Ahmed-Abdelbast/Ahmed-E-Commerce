// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <>

    <footer className="text-white">
      <div className="bg-black p-8">
      <div className="grid  md:grid-cols-5 sm:grid-cols-2 container mx-auto text-center p-8">
        <div>
          <h1 className="font-bold text-2xl">FreshCart</h1>
          <p className="py-4">subscripe</p>
          <p>Get 10% off your first order</p>
          <div  className="py-4">
            <input type="text" placeholder='Enter Your Email' className="p-2 border-1 border-white rounded-lg" />
            <i className="fa-solid fa-paper-plane relative right-10 cursor-pointer hover:text-green-400 duration-200"></i>
          </div>
        </div>
        <div>
        <h1 className="font-bold text-2xl pb-4">Acount</h1>
        <p><NavLink className="hover:text-green-400 duration-200" to={"acount"}>My Acount</NavLink></p>
        <p className="py-2">
          <NavLink className="hover:text-green-400 duration-200" to={"acount"}>Login  </NavLink>/
          <NavLink className="hover:text-green-400 duration-200" to={"acount"}> register</NavLink>
          
        </p>
        <p><NavLink className="hover:text-green-400 duration-200" to={"acount"}>cart</NavLink></p>
        <p className="py-2"><NavLink className="hover:text-green-400 duration-200" to={"acount"}>whishList</NavLink></p>
        <p><NavLink className="hover:text-green-400 duration-200" to={"acount"}>Shop</NavLink></p>

        </div>
        <div>
          <h1 className="font-bold text-2xl pb-4">Quick Link</h1>
          <p><NavLink className="hover:text-green-400 duration-200" to={"acount"}>Privacy Policy</NavLink></p>
          <p className="py-2"><NavLink className="hover:text-green-400 duration-200" to={"acount"}>Terms Of Use</NavLink></p>
          <p><NavLink className="hover:text-green-400 duration-200" to={"acount"}>FAQ</NavLink></p>
          <p className="py-2"><NavLink className="hover:text-green-400 duration-200" to={"acount"}>Contact</NavLink></p>

        </div>
        <div>
          <h1 className="font-bold text-2xl pb-4">Payment</h1>

          <p className="cursor-pointer">
            <i className="fa-brands fa-cc-paypal text-fuchsia-700 text-2xl"></i> Paypal
          </p>

          
        </div>
        <div>
          <h1 className="font-bold text-2xl pb-4">DownLoad App</h1>

          <p className="hover:text-green-400 duration-200 cursor-pointer">
            <i className="fa-brands fa-google-play text-2xl"></i> Google Play
            
          </p>
          <p className="hover:text-green-400 duration-200 cursor-pointer py-2">
            <i className="fa-brands fa-apple text-2xl"></i> App Store
            
          </p>
        </div>

      </div>
      </div>

      <div className="bg-gray-900 p-2 ">
          <p className="text-center">Made by : Ahmed Abdelbast</p>
        </div>


    </footer>
    
    
    
    
    
    
    </>
  )
}
