"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import { RiSearchLine } from "react-icons/ri";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Discover the Advantages of Eco-Friendly Homes with Our Real Estate Agency."
      
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="h-96 max-w-screen-2xl mx-auto flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-4xl font-bold">
      Live Green, Live Luxuriously.
      </h1>
      <p className="text-base md:text-lg font-semibold mt-2">
        {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
      </p>
      
      <div className="relative mt-9  ">
          <input
            type="search"
            className="bg-white z-30  py-4  w-[28rem] sm:w-[37rem] rounded-full pl-5 placeholder:text-black placeholder:text-[20px] outline-0 "
            placeholder="Adress, School, City, Zip or Neighborhood"
          />
          <div className="absolute w-[2.7rem] h-[2.7rem] rounded-full  bg-[#008000] top-[0.4rem] right-1 flex items-center justify-center">
            <RiSearchLine className="text-white text-[22px]" />
          </div>
        </div>
      
    </div>
    
  );
};

export default Banner;
