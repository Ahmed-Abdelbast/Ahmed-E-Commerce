// eslint-disable-next-line no-unused-vars
import React from 'react'
import useCategories from '../../Hooks/useCategories'

export default function Categories() {

  const category=  useCategories()



  if(category.isLoading){
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
              <p className="translate-y-2">Categories</p>
            </div>
            <div className="py-2">
              <h1 className="text-4xl">All Categories :</h1>
            </div>
          </div>

                    <div className="w-[80%]  mx-auto my-12">
                      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-15">

                      {category?.data?.data?.data ? category.data.data.data.map((categ)=>{return               <div key={categ._id}>
              <img src={categ.image} className="w-full h-60 " alt="" />
              <p className="text-center">{categ.name}</p>
            </div> }):""}

                      </div>
                    </div>
    
    
    
    </>
  )
}
