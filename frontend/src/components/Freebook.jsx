
// import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import list from'../../public/list.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mycard from './Mycard';

function Freebook() {
//   const[books,setBooks]=useState([]);

//   useEffect(()=>{
//    fetch('http://localhost:4001/book')
   
//     .then((res) => {
//       if(!res.ok){
//         console.log(res)
// throw new Error("netwok problmm")
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data)
//      const freebok= data.filter((book)=>book.category==='free');
//      setBooks(freebok)
//     })
//   .catch((error )=>{
//     console.log(error)

//   })
  
//     // console.log(list)

//   }, [])





    const filterdata =list.filter((data)=>
        data.category==="free");
    console.log(filterdata)

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1536,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '  style={{backgroundColor:"white"}}>
        <div>
        <h1 className='font-bold text-xl pb-2 pt-6'>Free offer course</h1>
        <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rem dolore, magnam repellendus ipsam unde itaque quibusdam impedit mollitia accusantium reprehenderit reiciendis dolores
        </p>

        </div>
       
   

    <div>
    <div className="slider-container">
      <Slider {...settings}>
    {  filterdata.map((itm) =>
        <Mycard itm={itm} key={itm.id}/>
      )}
      </Slider>
    </div>
  
    </div>
    </div>
    
    </>
  );
}

export default Freebook


