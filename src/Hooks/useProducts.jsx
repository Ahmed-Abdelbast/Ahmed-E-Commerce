
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


export default function useProducts() {



    function getProduct(){
        return axios.get("https://ecommerce.routemisr.com/api/v1/products",{
            params:{
                limit:4
            }
        })
       
        }

        const response = useQuery({
            queryKey:["product"],
            queryFn:getProduct
           })


           return response
 
}
