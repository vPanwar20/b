import React from 'react'

function Mycard({itm}) {
    console.log(itm);
  return (
    <div>
        <div className=" mt-7 mb-6 p-3 card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
  <figure>
    <img
      src={itm.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {itm.name}
      <div className="badge badge-secondary">{itm.category}</div>
    </h2>
    <p>{itm.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${itm.price}</div>
      <div className=" cursor-pointer badge badge-outline  px-3 py-3 rounded-full    border-[2px] hover:bg-pink-600  hover:text-white">buy now</div>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default Mycard
