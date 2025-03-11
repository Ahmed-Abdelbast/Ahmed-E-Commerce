
import { Link } from 'react-router-dom'
import NotFound from '../../assets/images/404-computer.svg'

export default function PageNotFound() {

  return (
    <>


<div className='w-[80%] mx-auto mt-30'>
        <div className="flex justify-center items-center">
            <img src={NotFound} alt="Not Found Page" />
        </div>
        <div className="mb-10">
            <h1 className='text-3xl font-bold text-center text-green-800'>
            404 Not Found
            </h1>

            <p className="text-4xl font-bold text-center my-10 ">Whoops! That page doesn’t exist.</p>
            

           <p className="text-center">
       <Link to={"/login"}><button className="text-center px-10 py-3 rounded-lg bg-green-800 text-white">Back to Home Page</button></Link>
           </p>

        </div>
    </div>


    
    
    
    
    
    
    </>
  )
}
