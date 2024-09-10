import React, { useEffect, useState } from 'react'
// import list from "../../public/list.json"
import Mycard from './Mycard'
import { Link } from 'react-router-dom'


function Course() {
  const[books,setBooks]=useState([]);

  useEffect(()=>{
   fetch('http://localhost:4001/book')
   
    .then((res) => {
      if(!res.ok){
        console.log(res)
throw new Error("netwok problmm")
      }
      return res.json();
    })
    .then((data) => {
      console.log(data)
      setBooks(data)
    })
  .catch((error )=>{
    console.log(error)

  })
  
    // console.log(list)

  }, [])

 
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4' >
      <div className=' mt-29 items-center justify-center text-center'>
        <h1 className='text-2xl  font-semibold  md:text-4xl '>
          WE,re delighted to have  <span className='text-pink-500'>you Here!
            </span> 
        </h1>
        <p className='mt-14'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis harum cumque eum fuga pariatur dolore perferendis laborum reprehenderit, laboriosam ad voluptates labore quos molestiae amet ea quibusdam? Ipsum, obcaecati corrupti.
        </p>
        <Link to="/">
        <button className='bg-pink-500 text-white pl-10 pr-10 rounded-md mt-10 pt-2 pb-2 hover:bg-pink-700 duration-300'>BACK</button>

        
        </Link>
      </div>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-4'>
        {
          books.map((itm)=>(
            <Mycard key={itm.id} itm={itm}/>
          )

          )
        }
      </div>

      
    </div>
  )
}

export default Course


