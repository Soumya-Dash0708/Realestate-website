import React from "react";

import { FiMenu } from "react-icons/fi";



const Navbar = () => {
  return (
    <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-transparent">
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
        
        <h1 className="text-2xl uppercase font-bold">EcoHeaven Realty</h1>
        <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-sm font-semibold">
          <li  className="navbarLi">Home</li>
          <li className="navbarLi">Company</li>
          <li className="navbarLi">Properties</li>
          <li className="navbarLi">Blog</li>
          <li className="navbarLi">Contact Us</li>
          
        </ul>
        <div className="hidden lg:inline-flex gap-8 items-center">

        <button className=" bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-full">
            Login
          </button>
      
          <button className="bg-green-900 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full">
            Create an account
          </button>
        </div>
        <div className="inline-flex lg:hidden">
          <FiMenu className="text-3xl" />
        </div>
        


      </div>
    </div>

    
  );
  
};

export default Navbar;
