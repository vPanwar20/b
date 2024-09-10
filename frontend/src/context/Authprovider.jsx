import React, { createContext, useState } from 'react'
import { useContext } from 'react';
export const Authcontext=createContext()

function Authprovider({children}) {
    const initialAutheruser=localStorage.getItem("userstorage");
    const[authuser,setAuthuser]=useState(
        initialAutheruser?JSON.parse(initialAutheruser):undefined
    )
return(
    <Authcontext.Provider value={[authuser,setAuthuser]}>
        {children}
    </Authcontext.Provider>
)

}
export const useAuth = () =>   useContext( Authcontext);

export default Authprovider
