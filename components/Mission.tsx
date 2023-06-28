import React from "react";



const Mission = () =>  {
    return (
        <>

       <div className="flex flex-col gap-12 lg:flex-row items-center justify-center border-b-[1px] border-gray-500 mb-12 h-96 lg:mb-0 pt-28 lg:pt-0">
          <img 
            src={"https://global.sacap.edu.za/wp-content/uploads/2022/07/tips-effective-management-global-sacap.jpg"}
            width={500}
            height={500}
            className="rounded-md ..."
            alt={"about image"}
            />
          <div className="lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl">
            <div className="uppercase font-semibold text-sm text-green-900">
              - Our Mission
            </div>
            <div className="font-semibold text-3xl mt-8 text-White uppercase">
            Building a Better Future with Eco-Friendly Homes.
            </div>
            <p className="text-WhiteGray text-sm mt-8 leading-7">
              {" "}
              The agency's mission is to provide clients with a selection of properties that meet high environmental standards, while also providing a comfortable and luxurious lifestyle.
            </p>
            <br/>
            <button className="bg-green-900 hover:bg-green-700 text-white font-bold  py-2 px-4 rounded-full">
           Learn More
            </button>
            </div>
            </div>

      </>
  );
}
export default Mission;

