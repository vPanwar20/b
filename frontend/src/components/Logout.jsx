import React from 'react'
import { useAuth } from '../context/Authprovider'
import toast from "react-hot-toast"

function Logout() {
    const[authuser,setAuthuser]=useAuth()
    const handleloout=()=>{
        try{
            setAuthuser({
                ...authuser,
                userstorage:null
            }

            )
            localStorage.removeItem("userstorage")
            toast.success("logout succcessfully");

            setTimeout(()=>{
            window.location.reload();
          localStorage.setItem("userstorage", JSON.stringify(res.data.user));
        
        
        
        
            },3000)


        }catch(error){
            toast.error("error:"+error.message);
            setTimeout(()=>{

            },3000)

        }
    }
  return (
    <div>
        <button className='px-3 py-3 bg-pink-400 text-white rounded-md cursor-pointer' onClick={handleloout}>Logout</button>
      
    </div>
  )
}

export default Logout
