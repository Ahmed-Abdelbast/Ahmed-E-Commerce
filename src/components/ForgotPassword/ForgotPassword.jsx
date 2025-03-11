
import axios from 'axios'
import { useFormik } from 'formik'
import { useState } from 'react';
import toast from 'react-hot-toast';

import { Link, useNavigate } from 'react-router-dom'
import  Cookies  from 'js-cookie';

export default function ForgotPassword() {
const navigate=  useNavigate()
  const [code,setCode]= useState(false)
  const [NewPass,setnewPass]= useState(false)
  const [email,setemail]= useState(true)
  function forGetPassword(value){
    
    
   return axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,value)
   .then(()=>{
    
    

    toast.success("Email correct")
    setemail(false)
    
    setCode(true)
      ;
    })
    .catch(()=>{
      toast.error("Email Not Found")
     
      
    })
  }


  

  function VerviyCode(value){
   
    
   return axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,value)
   .then(()=>{
    
    toast.success("code correct")
    setCode(false)

    setnewPass(true)

      
    })
    .catch(()=>{
      
      toast.error("code not correct")
      
     
    })
  }

  function ResetPassword(value){
   
    
    return axios.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,value)
    .then((res)=>{
      console.log(res);
      Cookies.set("userToken",res.data.token)
      
     
     toast.success("Success")

     navigate("/login")


 
       
     })
     .catch((err)=>{
      console.log(err);
      
       
       toast.error("Error")
      
     })
   }



const formFrogetPasswird=  useFormik({
    initialValues:{
      email:''
    },
    onSubmit:forGetPassword
  })
  const verifyCodeForm=  useFormik({
    initialValues:{
      resetCode:''
    },
    onSubmit:VerviyCode
  })
  const NewPassword=  useFormik({
    initialValues:{
      email:'',
      newPassword:'',
    },
    onSubmit:ResetPassword
  })





  return (
    <>
    
    <div className="max-w-lg mx-auto my-10 mt-25 bg-white p-8 rounded-xl shadow shadow-slate-300">
  <h1 className="text-4xl font-medium text-green-800">Reset password</h1>
  <p className="text-slate-500">Fill up the form to reset the password</p>

  {email ?  <form onSubmit={formFrogetPasswird.handleSubmit} action className="my-10">
    <div className="flex flex-col space-y-5">
      <label htmlFor="email">
        <p className="font-medium text-slate-700 pb-2">Email address</p>
        <input value={formFrogetPasswird.values.email} onChange={formFrogetPasswird.handleChange} onBlur={formFrogetPasswird.handleBlur} id="email" name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
      </label>

      <button type='submit' className="w-full py-3 font-medium text-Black hover:text-white border-2 hover:bg-green-800 rounded-lg border-green-800 hover:shadow inline-flex space-x-2 items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
        </svg>
        <span>Verify Email</span>
      </button>
      <p className="text-center">Not registered yet? <a href="#" className="text-green-800 font-medium inline-flex hover:underline space-x-1 items-center"><Link to={"/signup"}>Register now </Link><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg></span></a></p>
    </div>
  </form>
  :
  // <form onSubmit={verifyCodeForm.handleSubmit} action className="my-10">
  //   <div className="flex flex-col space-y-5">
  //     {/* <label htmlFor="email">
  //       <p className="font-medium text-slate-700 pb-2">Email address</p>
  //       <input value={formFrogetPasswird.values.email} onChange={formFrogetPasswird.handleChange} onBlur={formFrogetPasswird.handleBlur} id="email" name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
  //     </label> */}
  //     <label htmlFor="resetCode">
  //       <p className="font-medium text-slate-700 pb-2">Code</p>
  //       <input value={verifyCodeForm.values.resetCode} onChange={verifyCodeForm.handleChange} onBlur={verifyCodeForm.handleBlur} id="resetCode" name="resetCode" type="code" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="code" />
  //     </label>
  //     <button type='submit' className="w-full py-3 font-medium text-Black hover:text-white border-2 hover:bg-green-800 rounded-lg border-green-800 hover:shadow inline-flex space-x-2 items-center justify-center">
  //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  //         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
  //       </svg>
  //       <span>Verify Code</span>
  //     </button>
  //     <p className="text-center">Not registered yet? <a href="#" className="text-green-800 font-medium inline-flex hover:underline space-x-1 items-center"><Link to={"/signup"}>Register now </Link><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  //             <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  //           </svg></span></a></p>
  //   </div>
  // </form> 
  "" }
 {code ?  
 <form onSubmit={verifyCodeForm.handleSubmit} action className="my-10">
    <div className="flex flex-col space-y-5">
      {/* <label htmlFor="email">
        <p className="font-medium text-slate-700 pb-2">Email address</p>
        <input value={formFrogetPasswird.values.email} onChange={formFrogetPasswird.handleChange} onBlur={formFrogetPasswird.handleBlur} id="email" name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
      </label> */}
      <label htmlFor="resetCode">
        <p className="font-medium text-slate-700 pb-2">Code</p>
        <input value={verifyCodeForm.values.resetCode} onChange={verifyCodeForm.handleChange} onBlur={verifyCodeForm.handleBlur} id="resetCode" name="resetCode" type="code" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="code" />
      </label>
      <button type='submit' className="w-full py-3 font-medium text-Black hover:text-white border-2 hover:bg-green-800 rounded-lg border-green-800 hover:shadow inline-flex space-x-2 items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
        </svg>
        <span>Verify Code</span>
      </button>
      <p className="text-center">Not registered yet? <a href="#" className="text-green-800 font-medium inline-flex hover:underline space-x-1 items-center"><Link to={"/signup"}>Register now </Link><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg></span></a></p>
    </div>
  </form> 
  : 
  
  ""}

  {/* code */}

  {NewPass ? 
  <form onSubmit={NewPassword.handleSubmit} action className="my-10">
  <div className="flex flex-col space-y-5">
    <label htmlFor="email">
      <p className="font-medium text-slate-700 pb-2">Email address</p>
      <input value={NewPassword.values.email} onChange={NewPassword.handleChange} onBlur={NewPassword.handleBlur} id="email" name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
    </label>
    <label htmlFor="newPassword">
      <p className="font-medium text-slate-700 pb-2">New Password</p>
      <input value={NewPassword.values.resetCode} onChange={NewPassword.handleChange} onBlur={NewPassword.handleBlur} id="newPassword" name="newPassword" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="New Password" />
    </label>
    <button type='submit' className="w-full py-3 font-medium text-Black hover:text-white border-2 hover:bg-green-800 rounded-lg border-green-800 hover:shadow inline-flex space-x-2 items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
      <span>Reset Passward</span>
    </button>
    <p className="text-center">Not registered yet? <a href="#" className="text-green-800 font-medium inline-flex hover:underline space-x-1 items-center"><Link to={"/signup"}>Register now </Link><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg></span></a></p>
  </div>
</form>
  
  
  : ""}


  





</div>

    
    
    
    
    </>
  )
}
