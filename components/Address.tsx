import React from "react";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";

const Address = () => {
  return (
    <div className="lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl">
      <p className="font-semibold text-2xl mt-3.5 text-White ">
        Get in touch to schedule a visit to your new house.
      </p>
      <p className="text-WhiteGray text-sm mt-4 leading-7">
        Kindly fill this form with your details about your inquiries and we
        would respond your inquiry shortly.
      </p>
      <br />
      <a href="mailto:example@example.com" className="flex items-center">
        <RiSendPlaneFill className="w-6 h-6 text-green-900 mr-2  items-center text-8xl" />
        <span className="font-semibold text-xl text-black">Send an Email</span>
      </a>

      <p className="text-green-900 text-sm mt-2 ml-8 leading-7">
        contact@ecohavenrealty.com
      </p>

      <a className="flex items-center mt-6">
        <PiPhoneCallFill className="w-6 h-6 text-green-900 mr-2" />
        <span className="font-semibold text-xl text-black">Give us a call</span>
      </a>

      <p className="text-green-900 text-sm mt-2 ml-8 leading-7">
        +234905 121 8127
      </p>

      <a className="flex items-center mt-6">
        <FaLocationDot className="w-6 h-6 text-green-900 mr-2" />
        <span className="font-semibold text-xl text-black">Office address</span>
      </a>

      <p className="text-green-900 text-sm mt-2 ml-8 leading-7">
        11,Odo-Olowu, Ijeshatedo B/Stop, Surulere
      </p>

      <a className="flex items-center mt-6">
        <IoTimeSharp className="w-6 h-6 text-green-900 mr-2" />
        <span className="font-semibold text-xl text-black">Working hours</span>
      </a>

      <p className="text-green-900 text-sm mt-2 ml-8 leading-7">
        Mon - Sat: 10am - 4pm
      </p>
    </div>
  );
};

export default Address;
