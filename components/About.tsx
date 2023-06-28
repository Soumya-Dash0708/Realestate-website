import React from "react";



const About = () =>  {
    return (
        <>
        
          <div className="flex flex-col gap-12 lg:flex-row items-center justify-center  mb-12 h-96 lg:mb-0 pt-28 lg:pt-0">
        
            <div className="lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl">
              <div className="uppercase font-semibold text-sm text-green-900">
                - Who We Are
              </div>
              <div className="font-semibold text-3xl mt-8 text-White uppercase">
              Discover Sustainable Luxury Living with EcoHaven Realty.
              </div>
              <p className="text-WhiteGray text-sm mt-8 leading-7">
                {" "}
                EcoHaven Realty is a real estate agency specialising in eco-friendly homes and sustainable living. We offer a range of eco-friendly properties, including energy-efficient homes, homes built with eco-friendly materials, and homes equipped with sustainable technologies such as solar panels.
              </p>
              <br/>
              <button className="bg-green-900 hover:bg-green-700 text-white font-bold  py-2 px-4 rounded-full">
           Our Company
            </button>
             
            </div>
            <img
              src={"https://www.build-review.com/wp-content/uploads/2021/01/solar-panels.jpg"}
              width={500}
              height={500}
              className="rounded-md ..."
              alt={"about image"}
            />
            
          </div>
      
          
      </>
  );
}
export default About;

