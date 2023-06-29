import React from 'react'
import { About } from "./data";
const Card = () => {
  return (
   
    

    <div className="flex flex-col  pt-12 items-center text-center h-auto bg-[#E4E5DF]">
    <div className="font-semibold text-3xl mt-8  text-White">
    Benefits of owning an eco-friendly home.
    </div>
    <p className="text-WhiteGray text-l mt-8 leading-10 max-w-3xl">
    High-quality homes with low-carbon impact.
    </p>
    <div className="grid gap-4 lg:grid-cols-3">
  {About.map((card) => (
    
      <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={card.key}>
      <div className=" bg-white p-4">
        
        <h3 className="text-xl text-left font-bold text-black">{card.text1}</h3>
        <p className=" text-left mb-2 ">{card.text2}</p>
        <img
          src={card.image}
          alt=""
          className="w-full mb-4"
        />
       
          
        </div>
      </div>
    
  ))}
</div>
</div>
  )
}

export default Card