"use client";
import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { RiSearchLine } from "react-icons/ri";

const Banner = () => {
  const [searchTitle, setSearchTitle] = useState<String>("");
  console.log(searchTitle);
  const [text] = useTypewriter({
    words: [
      "Discover the Advantages of Eco-Friendly Homes with Our Real Estate Agency.",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="h-96 w-full mx-auto flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          Live Green, Live Luxuriously.
        </h1>
        <p className="text-base md:text-lg font-semibold">
          {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
        </p>
      </div>

      <div className="relative">
        <input
          type="number"
          onChange={(e) => setSearchTitle(e.target?.value)}
          value=""
          className="bg-white z-30 py-4  w-[28rem] sm:w-[37rem] rounded-full pl-5 outline-0 text-black"
          placeholder=""
        />
        <div className="absolute w-[2.7rem] h-[2.7rem] rounded-full  bg-[#008000] top-[0.4rem] right-1 flex items-center justify-center">
          <RiSearchLine className="text-white text-[22px]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
