
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


export default function useBrands() {


    function getAllBrands(){
        return axios.get("https://ecommerce.routemisr.com/api/v1/brands",{
            params:{
                limit:4
            }
        })
    }

   const Brands= useQuery({
        queryKey:["Brand"],
        queryFn:getAllBrands
    
    })
  return Brands
}
