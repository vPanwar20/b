import React from 'react'
import Home from './home/Home'
import { Navigate, Route ,Routes}from "react-router-dom"
import Courses from './mycourse/Courses'
import Signup from './components/Signup'
import  toast, { Toaster } from 'react-hot-toast';
import {useAuth} from "./context/Authprovider";



function App() {
  const[authuser,setAuthuser]=useAuth();
  
  console.log(authuser);
  return (
    <>
    {/* <Home/>
    <Course/> */}

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authuser?<Courses/> :<Navigate to="/signup"/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    <Toaster />
  
    
  </>
   
  )
}

export default App

