
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


export default function Brands() {




    function getAllBrands(){
        return axios.get("https://ecommerce.routemisr.com/api/v1/brands")
    }

   const Brands= useQuery({
        queryKey:["Brand"],
        queryFn:getAllBrands
    
    })
  return (
    <>


<div className="w-[80%] mx-auto my-25">
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

                    </div>
    
    </>
  )
}
