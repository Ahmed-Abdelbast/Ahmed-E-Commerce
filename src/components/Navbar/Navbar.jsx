

import { useContext, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import Cookies from 'js-cookie';
// import useGetCart from '../../Hooks/useGetCart';
import { AddCart } from '../../context/AddToCart';
import useGetCart from '../../Hooks/useGetCart';





export default function Navbar() {
  let navigate = useNavigate()
  let {token}=useContext(AuthContext)
  let {numOfProd,setNumOfProd}=  useContext(AddCart)
  console.log(numOfProd);
  
  // const resultCart = useGetCart()
  // setNumOfProd(resultCart?.data?.data?.numOfCartItems)
  function CartSection(){
    navigate("/cart")
  }
  function WhshSection(){
    navigate("/whishList")
  }

  function deletAcount(){
    Cookies.remove("userToken")
    token(null)

    navigate("/login")


  } 






 const {Utoken}= useContext(AuthContext)






 





  return (
    <>

    






<nav className="bg-black text-white w-full fixed top-0 z-50">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

    <div>
    <NavLink to={"home"}>
      <svg width={160} height={31} viewBox="0 0 160 31" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.12346 24.8618C9.5969 24.8618 10.7914 23.6674 10.7914 22.194C10.7914 20.7205 9.5969 19.526 8.12346 19.526C6.65002 19.526 5.45557 20.7205 5.45557 22.194C5.45557 23.6674 6.65002 24.8618 8.12346 24.8618Z" stroke="#0AAD0A" strokeWidth="1.28276" strokeMiterlimit={10} strokeLinecap="round" />
  <path d="M6.97607 9.18945H23.1146" stroke="#0AAD0A" strokeWidth="1.28276" strokeMiterlimit={10} strokeLinecap="round" />
  <path d="M8.38892 12.4171H22.4092" stroke="#0AAD0A" strokeWidth="1.28276" strokeMiterlimit={10} strokeLinecap="round" />
  <path d="M7.66113 19.525H18.1138C19.2586 19.525 20.2784 18.7977 20.6505 17.7144L24.9585 5.1809C25.3307 4.09761 26.3495 3.37036 27.4953 3.37036H30.6292" stroke="#0AAD0A" strokeWidth="1.28276" strokeMiterlimit={10} strokeLinecap="round" />
  <path d="M8.12359 22.5791C8.33639 22.5791 8.5089 22.4066 8.5089 22.1939C8.5089 21.981 8.33639 21.8086 8.12359 21.8086C7.91079 21.8086 7.73828 21.981 7.73828 22.1939C7.73828 22.4066 7.91079 22.5791 8.12359 22.5791Z" stroke="#0AAD0A" strokeWidth="1.06897" strokeMiterlimit={10} strokeLinecap="round" />
  <path d="M17.8222 24.8618C19.2956 24.8618 20.49 23.6674 20.49 22.194C20.49 20.7205 19.2956 19.526 17.8222 19.526C16.3487 19.526 15.1543 20.7205 15.1543 22.194C15.1543 23.6674 16.3487 24.8618 17.8222 24.8618Z" stroke="#0AAD0A" strokeWidth="1.28276" strokeMiterlimit={10} strokeLinecap="round" />
  <path d="M17.8223 22.5791C18.035 22.5791 18.2076 22.4066 18.2076 22.1938C18.2076 21.981 18.035 21.8085 17.8223 21.8085C17.6095 21.8085 17.437 21.981 17.437 22.1938C17.437 22.4066 17.6095 22.5791 17.8223 22.5791Z" stroke="#0AAD0A" strokeWidth="1.06897" strokeMiterlimit={10} strokeLinecap="round" />
  <path d="M21.1874 16.152H7.14791C6.67788 16.152 6.26535 15.8261 6.13624 15.3519L3.75481 6.62879C3.63578 6.19381 3.94745 5.75989 4.37916 5.75989H22.3776" stroke="#0AAD0A" strokeWidth="1.28276" strokeMiterlimit={10} strokeLinecap="round" />
  <path d="M1 26.527C1 26.527 11.26 23.0552 25.1058 26.527" stroke="#0AAD0A" strokeWidth="1.28276" strokeMiterlimit={10} strokeLinecap="round" />
  <path d="M36.5269 25V6.34164H48.8807V9.59409H40.4717V14.04H48.0608V17.2925H40.4717V25H36.5269Z" className="fill-white" fill="#21313C" />
  <path d="M50.4661 25V11.0062H54.2287V13.4478H54.3745C54.6296 12.5793 55.0578 11.9233 55.6591 11.48C56.2604 11.0305 56.9528 10.8058 57.7363 10.8058C57.9306 10.8058 58.1402 10.8179 58.3649 10.8422C58.5896 10.8665 58.787 10.8999 58.9571 10.9424V14.3862C58.7749 14.3316 58.5228 14.283 58.2009 14.2404C57.879 14.1979 57.5844 14.1767 57.3172 14.1767C56.7463 14.1767 56.2361 14.3012 55.7866 14.5502C55.3433 14.7932 54.991 15.1333 54.7298 15.5706C54.4747 16.0079 54.3472 16.512 54.3472 17.0829V25H50.4661Z" className="fill-white" fill="#21313C" />
  <path d="M65.92 25.2733C64.4805 25.2733 63.2415 24.9817 62.2029 24.3987C61.1704 23.8095 60.3747 22.9774 59.8159 21.9024C59.2572 20.8213 58.9778 19.5428 58.9778 18.0669C58.9778 16.6274 59.2572 15.3641 59.8159 14.2769C60.3747 13.1897 61.1613 12.3424 62.1756 11.7351C63.1959 11.1277 64.3924 10.824 65.7651 10.824C66.6883 10.824 67.5477 10.9728 68.3434 11.2704C69.1451 11.562 69.8436 12.0023 70.4388 12.5914C71.0401 13.1806 71.5078 13.9216 71.8418 14.8144C72.1759 15.7012 72.3429 16.7398 72.3429 17.9302V18.9961H60.5266V16.591H68.6896C68.6896 16.0322 68.5681 15.5372 68.3251 15.1059C68.0822 14.6747 67.7451 14.3376 67.3139 14.0947C66.8887 13.8457 66.3937 13.7211 65.8289 13.7211C65.2397 13.7211 64.7174 13.8578 64.2619 14.1311C63.8124 14.3984 63.4601 14.7597 63.205 15.2153C62.95 15.6647 62.8194 16.1658 62.8133 16.7185V19.0052C62.8133 19.6976 62.9408 20.2959 63.1959 20.8C63.4571 21.3041 63.8246 21.6928 64.2983 21.9662C64.7721 22.2395 65.3339 22.3761 65.9837 22.3761C66.415 22.3761 66.8098 22.3154 67.1681 22.1939C67.5265 22.0724 67.8332 21.8902 68.0883 21.6473C68.3434 21.4043 68.5377 21.1067 68.6713 20.7545L72.2609 20.9913C72.0787 21.8538 71.7051 22.6069 71.1403 23.2507C70.5815 23.8885 69.8588 24.3865 68.972 24.7449C68.0913 25.0971 67.074 25.2733 65.92 25.2733Z" className="fill-white" fill="#21313C" />
  <path d="M85.7492 14.9966L82.1961 15.2153C82.1353 14.9116 82.0048 14.6383 81.8043 14.3953C81.6039 14.1463 81.3397 13.9489 81.0117 13.8031C80.6898 13.6513 80.3041 13.5754 79.8547 13.5754C79.2534 13.5754 78.7462 13.7029 78.3332 13.958C77.9202 14.207 77.7137 14.5411 77.7137 14.9602C77.7137 15.2942 77.8473 15.5767 78.1146 15.8075C78.3818 16.0383 78.8404 16.2235 79.4903 16.3632L82.023 16.8734C83.3835 17.1528 84.3978 17.6022 85.0659 18.2217C85.734 18.8413 86.068 19.6551 86.068 20.6634C86.068 21.5805 85.7978 22.3852 85.2572 23.0776C84.7227 23.77 83.9878 24.3106 83.0525 24.6993C82.1232 25.0819 81.0512 25.2733 79.8365 25.2733C77.984 25.2733 76.5081 24.8876 75.4087 24.1162C74.3155 23.3388 73.6747 22.282 73.4864 20.9458L77.3037 20.7453C77.4191 21.3102 77.6985 21.7414 78.1419 22.039C78.5853 22.3306 79.1532 22.4763 79.8456 22.4763C80.5258 22.4763 81.0724 22.3458 81.4855 22.0846C81.9045 21.8173 82.1171 21.4742 82.1232 21.0551C82.1171 20.7028 81.9683 20.4143 81.6768 20.1896C81.3852 19.9588 80.9358 19.7827 80.3284 19.6612L77.905 19.1783C76.5385 18.905 75.5211 18.4313 74.853 17.7571C74.191 17.0829 73.86 16.2235 73.86 15.1788C73.86 14.2799 74.1029 13.5055 74.5888 12.8557C75.0808 12.2058 75.7701 11.7047 76.6569 11.3524C77.5497 11.0001 78.5944 10.824 79.7909 10.824C81.5583 10.824 82.9492 11.1975 83.9635 11.9446C84.9839 12.6917 85.5791 13.709 85.7492 14.9966Z" className="fill-white" fill="#21313C" />
  <path d="M91.6233 16.9098V25H87.7423V6.34164H91.514V13.4752H91.678C91.9938 12.6491 92.504 12.0023 93.2086 11.5346C93.9131 11.0609 94.7968 10.824 95.8597 10.824C96.8315 10.824 97.6788 11.0366 98.4016 11.4617C99.1304 11.8808 99.6952 12.4852 100.096 13.2747C100.503 14.0582 100.703 14.9966 100.697 16.0899V25H96.8163V16.7823C96.8224 15.9198 96.6038 15.2487 96.1604 14.7689C95.7231 14.289 95.1096 14.0491 94.3201 14.0491C93.7916 14.0491 93.324 14.1615 92.917 14.3862C92.5162 14.6109 92.2003 14.9389 91.9695 15.3701C91.7448 15.7953 91.6294 16.3085 91.6233 16.9098Z" className="fill-white" fill="#21313C" />
  <path d="M119.518 12.8739H115.527C115.454 12.3576 115.306 11.899 115.081 11.4982C114.856 11.0913 114.568 10.7451 114.215 10.4596C113.863 10.1741 113.456 9.95547 112.994 9.80363C112.539 9.65179 112.044 9.57587 111.509 9.57587C110.544 9.57587 109.703 9.81578 108.986 10.2956C108.269 10.7693 107.713 11.4617 107.319 12.3728C106.924 13.2778 106.726 14.3771 106.726 15.6708C106.726 17.0009 106.924 18.1185 107.319 19.0235C107.72 19.9284 108.278 20.6117 108.995 21.0733C109.712 21.5349 110.541 21.7657 111.482 21.7657C112.011 21.7657 112.499 21.6959 112.949 21.5562C113.404 21.4165 113.808 21.213 114.161 20.9458C114.513 20.6725 114.804 20.3414 115.035 19.9527C115.272 19.564 115.436 19.1206 115.527 18.6226L119.518 18.6408C119.414 19.4972 119.156 20.3232 118.743 21.1189C118.336 21.9085 117.787 22.616 117.094 23.2416C116.408 23.8611 115.588 24.3531 114.634 24.7175C113.687 25.0759 112.615 25.255 111.418 25.255C109.754 25.255 108.266 24.8785 106.954 24.1253C105.648 23.3722 104.616 22.282 103.857 20.8547C103.104 19.4274 102.727 17.6994 102.727 15.6708C102.727 13.6361 103.11 11.9051 103.875 10.4778C104.64 9.0505 105.679 7.96331 106.991 7.21625C108.303 6.46312 109.778 6.08655 111.418 6.08655C112.499 6.08655 113.502 6.23839 114.425 6.54207C115.354 6.84576 116.177 7.28913 116.894 7.87221C117.61 8.4492 118.194 9.15679 118.643 9.99495C119.099 10.8331 119.39 11.7928 119.518 12.8739Z" className="fill-white" fill="#21313C" />
  <path d="M125.494 25.2642C124.601 25.2642 123.806 25.1093 123.107 24.7995C122.409 24.4837 121.856 24.0191 121.449 23.4056C121.048 22.7861 120.848 22.0147 120.848 21.0915C120.848 20.3141 120.991 19.6612 121.276 19.1328C121.562 18.6044 121.95 18.1792 122.442 17.8573C122.934 17.5354 123.493 17.2925 124.119 17.1285C124.75 16.9645 125.412 16.8491 126.105 16.7823C126.919 16.6972 127.575 16.6183 128.073 16.5454C128.571 16.4664 128.932 16.351 129.157 16.1992C129.381 16.0474 129.494 15.8226 129.494 15.525V15.4704C129.494 14.8934 129.312 14.447 128.947 14.1311C128.589 13.8153 128.079 13.6574 127.417 13.6574C126.718 13.6574 126.162 13.8123 125.749 14.122C125.336 14.4257 125.063 14.8083 124.929 15.2699L121.34 14.9784C121.522 14.1281 121.88 13.3932 122.415 12.7737C122.949 12.1481 123.639 11.6682 124.483 11.3342C125.333 10.9941 126.317 10.824 127.435 10.824C128.212 10.824 128.956 10.9151 129.667 11.0973C130.384 11.2795 131.018 11.562 131.571 11.9446C132.13 12.3272 132.57 12.8192 132.892 13.4205C133.214 14.0157 133.375 14.7294 133.375 15.5615V25H129.694V23.0594H129.585C129.36 23.4967 129.06 23.8824 128.683 24.2164C128.306 24.5444 127.854 24.8026 127.325 24.9908C126.797 25.1731 126.187 25.2642 125.494 25.2642ZM126.606 22.5857C127.177 22.5857 127.681 22.4733 128.118 22.2486C128.555 22.0178 128.899 21.708 129.148 21.3193C129.397 20.9306 129.521 20.4903 129.521 19.9983V18.5133C129.4 18.5922 129.233 18.6651 129.02 18.7319C128.814 18.7927 128.58 18.8504 128.319 18.905C128.057 18.9536 127.796 18.9992 127.535 19.0417C127.274 19.0781 127.037 19.1115 126.824 19.1419C126.369 19.2087 125.971 19.315 125.631 19.4608C125.291 19.6065 125.027 19.8039 124.838 20.0529C124.65 20.2959 124.556 20.5996 124.556 20.964C124.556 21.4924 124.747 21.8963 125.13 22.1757C125.519 22.449 126.011 22.5857 126.606 22.5857Z" className="fill-white" fill="#21313C" />
  <path d="M135.616 25V11.0062H139.379V13.4478H139.525C139.78 12.5793 140.208 11.9233 140.809 11.48C141.411 11.0305 142.103 10.8058 142.886 10.8058C143.081 10.8058 143.29 10.8179 143.515 10.8422C143.74 10.8665 143.937 10.8999 144.107 10.9424V14.3862C143.925 14.3316 143.673 14.283 143.351 14.2404C143.029 14.1979 142.735 14.1767 142.467 14.1767C141.896 14.1767 141.386 14.3012 140.937 14.5502C140.493 14.7932 140.141 15.1333 139.88 15.5706C139.625 16.0079 139.497 16.512 139.497 17.0829V25H135.616Z" className="fill-white" fill="#21313C" />
  <path d="M153.489 11.0062V13.9216H145.062V11.0062H153.489ZM146.975 7.65355H150.856V20.6998C150.856 21.0581 150.911 21.3375 151.02 21.538C151.129 21.7323 151.281 21.869 151.476 21.9479C151.676 22.0269 151.907 22.0664 152.168 22.0664C152.35 22.0664 152.532 22.0512 152.715 22.0208C152.897 21.9844 153.036 21.957 153.134 21.9388L153.744 24.8269C153.55 24.8876 153.276 24.9574 152.924 25.0364C152.572 25.1214 152.144 25.173 151.64 25.1913C150.704 25.2277 149.884 25.1032 149.18 24.8177C148.481 24.5323 147.938 24.0889 147.549 23.4876C147.16 22.8863 146.969 22.1271 146.975 21.21V7.65355Z" className="fill-white" fill="#21313C" />
</svg>
        
        


      </NavLink>
    </div>




    




    
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>


    {Utoken != null ? <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0    ">
      <li className="hover:text-green-400 duration-200">
          <NavLink to={"home"} >Home</NavLink>
        </li>

        <li className="hover:text-green-400 duration-200">
          <NavLink to={"products"}>Products</NavLink>
        </li>
        <li className="hover:text-green-400 duration-200">
          <NavLink to={"categories"}>Categories</NavLink>
        </li>
        <li className="hover:text-green-400 duration-200">
          <NavLink to={"brands"}>Brands</NavLink>
        </li>
      </ul>
      <div > 
      <div className="flex gap-4 justify-center md:hidden" id="navbar-default">
        <ul className="flex gap-4">
        {Utoken != null ? <ul className="flex gap-4">
          <li onClick={WhshSection}>
            <p className="hover:text-green-400 duration-200 cursor-pointer"><i className="fa-regular fa-heart text-3xl"></i></p>
            
          </li>
          <li className="relative" onClick={CartSection}>
            <p className="hover:text-green-400 duration-200 cursor-pointer"><i className="fas fa-cart-shopping text-3xl"></i></p>
            <p className="absolute top-[-50%] left-[60%] text-white px-2 bg-green-600  rounded-4xl">{numOfProd ? numOfProd :0}</p>
          </li>
     

        </ul> : ""}

        </ul>
        <div className="flex gap-3">
        {Utoken === null ?  <>

<NavLink to={"login"}><button className="cursor-pointer hover:text-green-400 duration-200">Login</button></NavLink>
<NavLink to={"signup"}><button className="cursor-pointer hover:text-green-400 duration-200">signup</button></NavLink>



</> : ""}

{Utoken != null ? <>


  <div>
  <button id="ahmedahmed" data-dropdown-toggle="ahmed" className="text-white cursor-pointer hover:text-green-400  font-medium rounded-lg text-2xl  text-center inline-flex items-center" type="button"><i className="fa-solid fa-user"></i> <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
    </svg>
  </button>
  <div id="ahmed" className="z-10 hidden  divide-y divide-gray-100 rounded-lg shadow-sm w-44 bg-black">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="ahmedahmed">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
      <button onClick={deletAcount} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
      </li>
    </ul>

  </div>
</div>




  {/* <div className="ml-5 ">
  <button id="dropdownDelayButtonMobile" data-dropdown-toggle="dropdownDelayMobile" data-dropdown-delay={500} data-dropdown-trigger="hover" className="text-white cursor-pointer hover:text-green-400  font-medium rounded-lg text-2xl  text-center inline-flex items-center" type="button"><i className="fa-solid fa-user"></i> <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
    </svg>
  </button>
 
  <div id="dropdownDelayMobile" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButtonMobile">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <button onClick={deletAcount} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
      </li>
    </ul>
  </div>
</div> */}



</> : ""}
        </div>
      </div>

    </div>

      
      
    </div> : "" }
    <div id="navbar-default" className="hidden w-full md:block md:w-auto"> 
      <div className="flex gap-4 " >
        {Utoken != null ? <ul className="flex gap-6">
          <li className="relative" onClick={WhshSection}>
            <p className="hover:text-green-400 duration-200 cursor-pointer"><i className="fa-regular fa-heart text-3xl"></i></p>
            
          </li>
          <li className="relative" onClick={CartSection}>
            <p className="hover:text-green-400 duration-200 cursor-pointer"><i className="fas fa-cart-shopping text-3xl"></i></p>
            <p className="absolute top-[-50%] left-[60%] text-white px-2 bg-green-600  rounded-4xl">{numOfProd ? numOfProd :0}</p>
          </li>
     

        </ul> : ""}
        <div className="flex gap-3 ">
          {Utoken === null ?  <>

            <NavLink to={"login"}><button className="cursor-pointer hover:text-green-400 duration-200">Login</button></NavLink>
            <NavLink to={"signup"}><button className="cursor-pointer hover:text-green-400 duration-200">signup</button></NavLink>
          
          
          
          </> : ""}

          {Utoken != null ? <>


 <div>
  <button id="tarek" data-dropdown-toggle="ahmedtarek" className="text-white cursor-pointer hover:text-green-400  font-medium rounded-lg text-2xl  text-center inline-flex items-center" type="button"><i className="fa-solid fa-user"></i> <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
    </svg>
  </button>
  <div id="ahmedtarek" className="z-10 hidden  divide-y divide-gray-100 rounded-lg shadow-sm w-44 bg-black">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="tarek">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
      <button onClick={deletAcount} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
      </li>
    </ul>

  </div>
</div>




{/* <div className="ml-5">
  <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
    </svg>
  </button>
  <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
  </div>
</div> */}


          
              


{/* <div className="ml-5 ">
  <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay={500} data-dropdown-trigger="hover" className="text-white cursor-pointer hover:text-green-400  font-medium rounded-lg text-2xl  text-center inline-flex items-center" type="button"><i className="fa-solid fa-user"></i> <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
    </svg>
  </button>

  <div id="dropdownDelay" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
      <button onClick={deletAcount} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
      </li>
    </ul>
  </div>
</div> */}





          
          </> : ""}
        </div>
      </div>

    </div>

 






  </div>
</nav>






    
    
    
    
    
    
    </>
  )
}
