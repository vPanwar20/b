

import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast,  { Toaster } from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  
  const onSubmit = async (data) => {
    const userinfo={
     
      email:data.email,
      password:data.password

    };
    console.log(data)

  await axios.post("http://localhost:4001/user/login",userinfo)
.then((res)=>{
  console.log(res.data)
  if(res.data){
    toast.success('login successfully');
    document.getElementById('my_modal_5').close();

    setTimeout(()=>{
    window.location.reload();
  localStorage.setItem("userstorage", JSON.stringify(res.data.user));




    },3000)
  }
}).catch((err)=>{
  console.log(err)
  toast.error('error!');
  setTimeout(()=>{

  },3000);
})

  };
  return (
    <div>

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <form    onSubmit={handleSubmit(onSubmit)} method='dialog'>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-5 space-y-2'>
        <span>
            Email
         </span>
        <br />
         <input type="text" placeholder='Enter your Email' className='w-80 px-3 border rounded-md outline-none'
          {...register("email", { required: true })}  
         
         />
         <br />
         {errors.email && <span className='text-sm text-red-700'>This is required field</span>}
    </div>

<div className='mt-5 space-y-2'>
        <span>
            Password
        </span>
        <br />
          <input type="text" placeholder='Enter your Password' className='w-80 px-3 border rounded-md outline-none'
           {...register("password", { required: true })}
          />
          <br />
          {errors.password && <span className='text-sm text-red-700' >This is required field</span>}
    </div>

    <div className='flex justify-around pt-5 mt-2'>
        <button className='bg-pink-500 text-white pt-1 pb-1 pl-3 pr-3 rounded-md hover:bg-pink-700 duration-200'>Login</button>
        <p>Not registered?
            <Link to="/signup" className='underline text-blue-400 cursor-pointer'>Signup</Link>
            </p>
    </div>
    </form>

    <div className="modal-action">
      <form method="dialog">
        <Link to="/" className="btn" onClick={()=>document.getElementById('my_modal_5').close()}>Close</Link>
      </form>
    </div>
  </div>
</dialog>
      
    </div>
  )
}

export default Login

