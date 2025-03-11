// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react'


// import slide3 from '../../assets/slide3.jpg'
// import slide2 from '../../assets/slide2.jpg'
// import slide5 from '../../assets/lap.jpg'



// import { BeatLoader } from 'react-spinners';
import useProducts from '../../Hooks/useProducts';
import HomeProducts from '../HomeProducts/HomeProducts';
import SliderHome from '../Slider/SliderHome';
import useCategories from '../../Hooks/useCategories';
import SliderCategories from '../Slider/SliderCategories';
import { useNavigate } from 'react-router-dom';
import useBrands from '../../Hooks/useBrands';
import useGetCart from '../../Hooks/useGetCart';
import { AddCart } from '../../context/AddToCart';


// import Slider from '../Slider/Slider';


export default function Home() {

 const {setNumOfProd}=useContext(AddCart);

    const resultCart = useGetCart()
  
  
    setNumOfProd(resultCart?.data?.data?.numOfCartItems)


  const navigate = useNavigate();

  function viewAllProduct(){
    navigate("/products")

  }
  function viewAllBrands(){
    navigate("/brands")
  }


 



 const {data , isLoading} = useProducts();


 const categories = useCategories();

 const Brands = useBrands();

 
 

//  useEffect(()=>{
//   getProduct()
//  },[])

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

    <div>
      <div className="md:w-[80%] sm:w-[90%] mx-auto  my-15">

        <SliderHome />

      </div>

      <div className="w-[80%] mx-auto my-12">
        <h1 className="h-[2px] bg-gray-200"></h1>
      </div>


      <div className="w-[80%] mx-auto">
        <div className=" text-[#F43F5E] flex gap-5 align-middle">
          <h1 className="w-4 rounded-sm h-10 bg-[#F43F5E]"></h1>
          <p className="translate-y-2">Categories</p>
        </div>
        <div className="py-2">
          <h1 className="text-4xl">Browse By Categories :</h1>
          
        </div>

        

        
            
            
            
             
          <div className="grid grid-cols-1 gap-6 my-10 ">



           <SliderCategories  category={categories} /> 



          
          </div>
      
         
        

        







      </div>



      <div className="w-[80%] mx-auto my-12">
        <h1 className="h-[2px] bg-gray-200"></h1>
      </div>


      <div className="w-[80%] mx-auto">
        <div className=" text-[#F43F5E] flex gap-5 align-middle">
          <h1 className="w-4 rounded-sm h-10 bg-[#F43F5E]"></h1>
          <p className="translate-y-2">Brands</p>
        </div>
        <div className="py-2">
          <h1 className="text-4xl">All Brands :</h1>
        </div>
      </div>

      <div className="w-[80%]  mx-auto my-12">
                      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-15">

                      {Brands?.data?.data?.data ? Brands.data.data.data.map((Brand)=>{return  <div key={Brand._id} className=" cursor-pointer hover:border-1 rounded-lg">
              <img src={Brand.image} className="w-full h-60 " alt="" />
              <p className="text-center">{Brand.name}</p>
            </div> }):""}

                    

                      </div>
                      <div className="text-center mt-18">


<button onClick={viewAllBrands} className="p-3 text-center bg-[#F43F5E] text-white  cursor-pointer my-11">View All Brands</button>
</div>
                    </div>





      <div className="w-[80%] mx-auto my-12">
        <h1 className="h-[2px] bg-gray-200"></h1>
      </div>









      <div className="w-[80%] mx-auto">
        <div className=" text-[#F43F5E] flex gap-5 align-middle">
          <h1 className="w-4 rounded-sm h-10 bg-[#F43F5E]"></h1>
          <p className="translate-y-2">Products</p>
        </div>
        <div className="py-2">
          <h1 className="text-4xl">All products :</h1>
        </div>
      </div>


      <div className="w-[80%]  mx-auto my-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 gap-15">


          


          {data?.data?.data  ?  


               data?.data.data.map((product)=>{ return <HomeProducts key={product.id}  product={product} />  }): ""
          
          
          
          }
          

        </div>


        <div className="text-center mt-18">


          <button onClick={viewAllProduct} className="p-3 text-center bg-[#F43F5E] text-white  cursor-pointer">View All Products</button>
        </div>
      </div>
    </div>
    
    
    
    
    
    
    
    
    </>
  )
}
