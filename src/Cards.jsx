import React from 'react'
import img from "/src/assets/1.png";

function Cards({heading,img}) {
  return (
    <>
   <div className="w-64 mb-15 mt-15 ml-10 mr-10 bg-white rounded-lg shadow-md overflow-hidden text-center hover:shadow-xl transition-transform transform hover:-translate-y-0.5 hover:translate-x-0.5">
    <img src={img} alt="Card-image" className="w-full h-40 object-contain" />
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">
        {heading}
      </h1>
      <p className="text-gray-700">Lorem ipsum dolor sit amet necessitatibus facilis quos sed pariatur</p>
    </div>
  </div>
    </>
  )
}

export default Cards
