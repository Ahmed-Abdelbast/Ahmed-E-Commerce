
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Rigister from './components/Rigister/Rigister';
import AuthContextProvider from './context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Products from './components/Products/Products';
import Categories from './components/Categories/Categories';
import Brands from './components/Brands/Brands';
import AddToCartProvider from './context/AddToCart';
import { Toaster } from 'react-hot-toast';
import Cart from './components/Cart/Cart';
import AddToWhishlist from './context/AddToWhishlist';
import WhishList from './components/WhishList/WhishList';
import Payment from './components/Payment/Payment';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Protected from './components/Protected/Protected';
import PageNotFound from './components/PageNotFound/PageNotFound';




const queryClient = new QueryClient();
 
function App() {


  


  const router= createBrowserRouter([
    {path:"/" , element: <Layout /> , children:[
      {path:"/" , element:<Login /> },
      {path:"/home" , element:<Protected><Home /></Protected>},
      {path:"products" , element:<Protected><Products /></Protected>},
      {path:"categories" , element:<Protected><Categories /></Protected>},
      {path:"cart" , element:<Protected><Cart /></Protected>},
      {path:"whishList" , element:<Protected><WhishList /></Protected>},
      {path:"payment" , element:<Protected><Payment /></Protected>},
      {path:"brands" , element:<Protected><Brands /></Protected>},
      {path:"login" , element:<Login />},
      {path:"forgotpassword" , element:<ForgotPassword />},
      {path:"signup" , element:<Rigister />},
      {path:"*" , element:<PageNotFound />},
      
    ]}
  ]) ;


  return (
    <>


    <AuthContextProvider>
      
        <QueryClientProvider client={queryClient}>
           <AddToCartProvider>

            <AddToWhishlist>
               <RouterProvider router={router} />
               <Toaster />
            </AddToWhishlist>

           </AddToCartProvider>
        </QueryClientProvider>
      

    </AuthContextProvider>

    

    </>
  )
}

export default App
