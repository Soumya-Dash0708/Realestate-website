import React from "react";
import { Client } from "./data";
import { AiTwotoneStar } from "react-icons/ai";

const Card2nd = () => {
  return (
    <div className="p-20 bg-white">
      <div className="text-center text-black">
        <h2 className="mb-2 text-xl font-bold">What our customers say?</h2>
        <p className="text-lg text-slate-400">
          Hear from our satisfied customers and clients.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {Client.map((card) => (
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={card.image}
              alt="Student"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />

            <h2 className="text-xl text-center font-bold mb-1">{card.text2}</h2>
            <div className=" flex justify-center text-gray-800">
              {[...Array(5)].map((_, i) => (
                <div key={i}>
                  <AiTwotoneStar
                    className={`${
                      i >= Number(card.rating)
                        ? "text-gray-400"
                        : " text-yellow-400"
                    } text-lg xl:flex-row xl:items-center`}
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-700 mb-2">{card.text1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card2nd;
