/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import  Cookies  from 'js-cookie';




// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export default function AuthContextProvider({children}) {

  const [userToken, setuserToken] = useState(null)

  console.log(Cookies.get("userToken"));
  

  useEffect(()=>{
    if(Cookies.get("userToken") != null){

      setuserToken(Cookies.get("userToken"))
      
      
    }
  },[])

  



    




  return (
    <>

    <AuthContext.Provider value={
      {
        token:setuserToken,
        Utoken:userToken,
      }
    }>
        {children}
    </AuthContext.Provider>
    
    
    
    
    </>
  )
}
