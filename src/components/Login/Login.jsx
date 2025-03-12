
import axios from 'axios';
import { useFormik } from 'formik';
import  { useContext, useState } from 'react'
import {  ThreeDots } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { AuthContext } from '../../context/AuthContext';
import Cookies from 'js-cookie';

export default function Login() {
  const {token} = useContext(AuthContext);


  const navigate = useNavigate();

  const [success,setSuccess]=useState(null);
  const [faild,setFaild]=useState(null);
  const [load,setLoad]=useState(false);
  function btnLoad(){
    setLoad(true)
  }






  function registerForm (values){

    axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",values)
   .then((data)=>{
    
    token(data.data.token)
    // localStorage.setItem("userToken",data.data.token);
    Cookies.set("userToken",data.data.token)
    const timeSuccess= setInterval(()=>{
      setSuccess(data.statusText)
    },1000)
    setTimeout(()=>{
      clearInterval(timeSuccess)
      setSuccess(null)

      navigate("/home")

      

    },3000)
   })
    

   
   .catch((data)=>{
   const timeFaild= setInterval(()=>{
      setFaild(data.response.data.message)
    },1000)
    setTimeout(()=>{
      clearInterval(timeFaild)
      setFaild(null)
      setLoad(false)

    },3000)
   })
  }




  const  register = useFormik({
    initialValues:{

      email:'',
      password:'',
  
    },

    onSubmit:function(values){
      registerForm(values);
      btnLoad();
    },


    validationSchema: yup.object().shape({

      email: yup.string().required("you must not leave this input empty").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , "Wrong email"),
      password: yup.string().required("you must not leave this input empty").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ , "Your Password must include at least (A , a ,1 ,#) repeat 8"),
     
    })
  })
  return (
    <>

<div className="mt-15">
{success !== null ?     <div className="rounded-sm  w-[70%] mx-auto">
      <h4 className="text-center bg-green-200  p-3">{success}</h4>
    </div>: null }
    {faild !== null ?     <div className="rounded-2xl w-[70%] mx-auto">
      <h4 className="text-center bg-red-200  p-3">{faild}</h4>
    </div>: null }
</div>

<div className="mt-25">





<div className=" max-w-md  mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
  <h2 className="text-center font-bold text-3xl pb-11 text-green-900">Login </h2>
    <form className="max-w-md mx-auto " onSubmit={register.handleSubmit}>




  <div className="relative z-0 w-full mb-5 group">
  <label htmlFor="email">
    <p className="font-medium text-slate-700 pb-2">Your Email address</p>
    <input type="email" name="email" id="email" value={register.values.email} onChange={register.handleChange} onBlur={register.handleBlur} className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Email Address "  />
    
    {register.errors.email && register.touched.email ? <p className="bg-red-300 p-1 rounded-sm text-center">{register.errors.email}</p>:""}

    </label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
  <label htmlFor="password">
        <p className="font-medium text-slate-700 pb-2">Your Password</p>
        <input type="password" name="password" value={register.values.password} onChange={register.handleChange} onBlur={register.handleBlur} id="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Your Password" />
        {register.errors.password && register.touched.password ? <p className="bg-red-300 p-1 rounded-sm text-center">{register.errors.password}</p>:""}
  </label>
    </div>
    {/* <input type="password" name="password" value={register.values.password} onChange={register.handleChange} onBlur={register.handleBlur} id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none  border-gray-600  focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
    {register.errors.password && register.touched.password ? <p className="bg-red-300 p-1 rounded-sm text-center">{register.errors.password}</p>:""} */}


  <div className="flex items-center justify-between mt-12">
  <div className="flex items-start">
    <div className="flex items-center h-5">
      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50      " required />
    </div>
    <div className="ml-3 text-sm">
      <label htmlFor="remember" className="text-gray-500 ">Remember me</label>
    </div>
  </div>
  <Link to={"/forgotpassword"} className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-green-800">Forgot password?</Link>
</div>

  

  <button type="submit"  className="mt-11 text-black  border-2 border-green-700 bg-transparent   hover:bg-green-700 focus:ring-1 hover:text-white focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm cursor-pointer w-full  px-5 py-2.5 text-center hover:border-green-700 duration-500  ">
  {load === false ? "LOGIN":
    <p className="text-center flex justify-center">
      
      <ThreeDots
  visible={true}
  height="18"
  

  color="#4fa94d"
  radius="2"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </p>
  
  
  }
  </button>

 <p className=" font-light  mt-8">
  Don’t have an account yet? <Link to={"/signup"} className="font-medium text-primary-600 hover:underline  text-green-800">Sign up</Link>
</p>

</form>

    </div>
    
    
    
    
    
    
    
    
    
    
    </div>
    
    
    
    
    
    </>
   
  
  )
}
