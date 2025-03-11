
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


export default function useCategories() {


    function getCategories(){
        return axios.get("https://ecommerce.routemisr.com/api/v1/categories")
    } 

  const categories =  useQuery({
        queryKey:["category"],
        queryFn:getCategories
    })
  return categories
}
