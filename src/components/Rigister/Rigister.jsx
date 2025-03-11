
import axios from 'axios';
import { useFormik } from 'formik';
import {  useState } from 'react';
import {  ThreeDots } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';

import * as yup from "yup";



export default function Rigister() {

  

  const navigate = useNavigate();

  const [success,setSuccess]=useState(null);
  const [faild,setFaild]=useState(null);
  const [load,setLoad]=useState(false);
  function btnLoad(){
    setLoad(true)
  }






  function registerForm (values){

    axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values)
   .then((data)=>{
    console.log(data.data.token);
   
    
    
    console.log(data.token);
    const timeSuccess= setInterval(()=>{
      setSuccess(data.statusText)
    },1000)
    setTimeout(()=>{
      clearInterval(timeSuccess)
      setSuccess(null)

      navigate("/login")

      

    },3000)
   })
    

   
   .catch((data)=>{console.log(data.response.data.message);
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
      name : '',
      phone:'',
      email:'',
      password:'',
      rePassword:''
    },

    onSubmit:function(values){
      registerForm(values);
      btnLoad();
    },


    validationSchema: yup.object().shape({
      name: yup.string().required("you must not leave this input empty").min(3,"Minmum length is 3 ").max(8,"Maximum length is 8"),
      phone: yup.string().required("you must not leave this input empty").matches(/^(20)?(01)[0125][0-9]{8}/ , "wrong phone"),
      email: yup.string().required("you must not leave this input empty").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , "Wrong email"),
      password: yup.string().required("you must not leave this input empty").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ , "Your Password must include at least (A , a ,1 ,#) repeat 8"),
      rePassword: yup.string().required("you must not leave this input empty").oneOf([yup.ref("password")],"Password do not match")
    })
  })
  return (
    <>


<div className="mt-15">
{success !== null ?     <div className="rounded-sm w-[80%] mx-auto">
      <h4 className="text-center bg-green-200  p-3">{success}</h4>
    </div>: null }
    {faild !== null ?     <div className="rounded-sm w-[80%] mx-auto">
      <h4 className="text-center bg-red-200  p-3">{faild}</h4>
    </div>: null }
</div>


<div className="max-w-md  mx-auto my-10 mt-25 bg-white p-8 rounded-xl shadow shadow-slate-300">
  <h2 className="text-center font-bold text-3xl pb-11 text-green-900">Register Now</h2>
    <form className="max-w-md mx-auto " onSubmit={register.handleSubmit}>


  <div className="relative z-0 w-full mb-5 group">
  <label htmlFor="name">
        <p className="font-medium text-slate-700 pb-2">Your Name</p>
        <input value={register.values.name} onChange={register.handleChange} name="name" onBlur={register.handleBlur} id="name" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Your Name" />
        {register.errors.name && register.touched.name ? <p className="bg-red-300 p-1 rounded-sm text-center">{register.errors.name}</p>:""}
  </label>
  </div>




  {/* <div className="relative z-0 w-full mb-5 group">
  <input type="text" value={register.values.name} onChange={register.handleChange} name="name" onBlur={register.handleBlur} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none  border-gray-600  focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
      {register.errors.name && register.touched.name ? <p className="bg-red-300 p-1 rounded-sm text-center">{register.errors.name}</p>:""}
   </div> */}

<div className="relative z-0 w-full mb-5 group">
  <label htmlFor="phone">
        <p className="font-medium text-slate-700 pb-2">Your Phone</p>
        <input type="tel" name="phone" value={register.values.phone} onChange={register.handleChange} id="phone" onBlur={register.handleBlur} className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Your phone" />
        {register.errors.phone && register.touched.phone ? <p className="bg-red-300 p-1 rounded-sm text-center">{register.errors.phone}</p>:""}
  </label>
 </div>




  {/* <div className="relative z-0 w-full mb-5 group">
  <input type="tel" name="phone" value={register.values.phone} onChange={register.handleChange} id="phone" onBlur={register.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none  border-gray-600  focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
  <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Phone</label></div>
  {register.errors.phone && register.touched.phone ? <p className="bg-red-300 p-1 rounded-sm text-center">{register.errors.phone}</p>:""} */}
<div className="relative z-0 w-full mb-5 group">
  <label htmlFor="email">
        <p className="font-medium text-slate-700 pb-2">Your Email</p>
        <input type="email" name="email" id="email" value={register.values.email} onChange={register.handleChange} onBlur={register.handleBlur}  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Your Email" />
        {register.errors.email && register.touched.email ? <p className="bg-red-300 p-1 rounded-sm text-center">{register.errors.email}</p>:""}
  </label>
 </div>



  {/* <div className="relative z-0 w-full mb-5 group">
    <input type="email" name="email" id="email" value={register.values.email} onChange={register.handleChange} onBlur={register.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none  border-gray-600  focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email address</label>
    {register.errors.email && register.touched.email ? <p className="bg-red-300 p-1 rounded-sm text-center">{register.errors.email}</p>:""}
  </div> */}

<div className="relative z-0 w-full mb-5 group">
  <label htmlFor="password">
        <p className="font-medium text-slate-700 pb-2">Your Password</p>
        <input type="password" name="password" value={register.values.password} onChange={register.handleChange} onBlur={register.handleBlur} id="password"  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Your Password" />
        {register.errors.password && register.touched.password ? <p className="bg-red-300 p-1 rounded-sm text-center">{register.errors.password}</p>:""}
  </label>
 </div>






  {/* <div className="relative z-0 w-full mb-5 group">
    <input type="password" name="password" value={register.values.password} onChange={register.handleChange} onBlur={register.handleBlur} id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none  border-gray-600  focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
    {register.errors.password && register.touched.password ? <p className="bg-red-300 p-1 rounded-sm text-center">{register.errors.password}</p>:""}
  </div> */}


<div className="relative z-0 w-full mb-5 group">
  <label htmlFor="rePassword">
        <p className="font-medium text-slate-700 pb-2">Re-Password</p>
        <input type="password" name="rePassword" value={register.values.rePassword} onChange={register.handleChange} onBlur={register.handleBlur} id="rePassword"  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="re-Password" />
        {register.errors.rePassword && register.touched.rePassword ? <p className="bg-red-300 p-1 rounded-sm text-center">{register.errors.rePassword}</p>:""}
  </label>
 </div>



  {/* <div className="relative z-0 w-full mb-5 group">
    <input type="password" name="rePassword" value={register.values.rePassword} onChange={register.handleChange} onBlur={register.handleBlur} id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none  border-gray-600  focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "  />
    <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
    {register.errors.rePassword && register.touched.rePassword ? <p className="bg-red-300 p-1 rounded-sm text-center">{register.errors.rePassword}</p>:""}
  </div> */}

  <button type="submit"  className="mt-11 text-black  border-2 border-green-700 bg-transparent   hover:bg-green-700 focus:ring-1 hover:text-white focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm cursor-pointer w-full  px-5 py-2.5 text-center hover:border-green-700 duration-500  ">
  {load === false ? "REGISTER":
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
  Do have an account yet? <Link to={"/login"} className="font-medium text-primary-600 hover:underline  text-green-800">Sign in</Link>
</p>
</form>

    </div>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
