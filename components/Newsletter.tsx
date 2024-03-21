import React from "react";
import { PiArrowUpRightBold } from "react-icons/pi";

const Newsletter = () => {
  return (
    <div className="shadow p-4 rounded-lg bg-white">
      <div className="flex justify-center relative rounded-lg overflow-hidden h-[474px] w-[1296px] ml-24 mt-14">
        <img
          src="/news.jpg"
          alt="..."
          className="shadow rounded-2xl  h-[474px] w-[1296px] align-middle border-none"
        />
        <div className="absolute flex justify-center mt-36">
          <div className="max-w-md p-6 bg-white rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold mb-2 text-center">
              Ready to find your eco-friendly home?{" "}
            </h2>
            <p className="text-gray-700 text-center text-base">
              We have homes in 20+ cities across the country to choose from!
            </p>
            <div className=" flex flex-col items-center justify-center pt-4">
              <button className="bg-green-900 hover:bg-green-700 text-white font-semibold  py-2 px-4 text-center inline-flex items-center gap-1 rounded-full">
                Browse Homes
                <PiArrowUpRightBold />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
