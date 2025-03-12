
import axios from 'axios';
import { useFormik } from 'formik'
import { useContext } from 'react';
import { AddCart } from '../../context/AddToCart';
import  Cookies  from 'js-cookie';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'


export default function Payment() {
const {cartId} =  useContext(AddCart);

  function createOrder(values){
   return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,{
      shippingAddress: values
    },{
      headers:{
        token: Cookies.get("userToken")

      }
    })
    .then(()=>{
      

      toast.success("Payment Success")
Swal.fire({
  title: "Payment Success",
  icon: "success",
  draggable: true
});


      



      
    })
    .catch(()=>{
      toast.error("Payment Faild")
      Swal.fire({
        icon: "error",
  title: "Payment Faild",
  text: "Something went wrong!",
  
})



      
    })
  }



const paymentForm =  useFormik({
    initialValues:{
                   
        details: "",
        phone: "",
        city: ""
        
    },
    onSubmit: createOrder
  })
  return <div className="mt-16 overflow-hidden">
  {
 
 
  }


  
  
 

 <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
  <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{maxWidth: 600}}>
    <div className="w-full pt-1 pb-5">
      <div className="bg-green-700 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
        <i className="mdi mdi-credit-card-outline text-3xl fas fa-credit-card" />
      </div>
    </div>
    <div className="mb-10">
      <h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
    </div>
    <div className="mb-3 flex -mx-2">
      <div className="px-2">
        <label htmlFor="type1" className="flex items-center cursor-pointer">
          <input type="radio" className="form-radio h-5 w-5 text-green-700" name="type" id="type1" defaultChecked />
          <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3" />
        </label>
      </div>
      <div className="px-2">
        <label htmlFor="type2" className="flex items-center cursor-pointer">
          <input type="radio" className="form-radio h-5 w-5 text-green-700" name="type" id="type2" />
          <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 ml-3" />
        </label>
      </div>
    </div>

    <form action="" onSubmit={paymentForm.handleSubmit}>
    <div className="mb-3">
      <label className="font-bold text-sm mb-2 ml-1">Phone</label>
      <div>
        <input value={paymentForm.values.phone} onChange={paymentForm.handleChange} onBlur={paymentForm.handleBlur} id='phone' className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-green-700 transition-colors" placeholder="Your phone" type="tel" />
      </div>
    </div>

    <div className="mb-3">
      <label className="font-bold text-sm mb-2 ml-1">City</label>
      <div>
        <input value={paymentForm.values.city} onChange={paymentForm.handleChange} onBlur={paymentForm.handleBlur} id='city' className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-green-700 transition-colors" placeholder="Your City" type="text" />
      </div>
    </div>
    <div className="mb-3">
      <label className="font-bold text-sm mb-2 ml-1">Details</label>
      <div>
        
        <input value={paymentForm.values.details} onChange={paymentForm.handleChange} onBlur={paymentForm.handleBlur} id='details' className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-green-700 transition-colors" placeholder="details" type="text" />
      </div>
    </div>
    <div className="flex justify-between mb-10">
        <p className="font-bold text-2xl ">Total Price : </p>
        <p className="text-red-400 font-bold text-[19px]"> $5648.00</p>
    </div>
    <div>
      <button type="submit" className="block cursor-pointer w-full max-w-xs mx-auto bg-green-700 hover:bg-green-800 focus:bg-green-700 text-white rounded-lg px-3 py-3 font-semibold"><i className="mdi mdi-lock-outline mr-1" /> PAY NOW</button>
    </div>
    </form>





    

  </div>
</div>


<div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
  <div>
    <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
      <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
    </a>
  </div>
</div>



  
  
  
  
  </div>
}
