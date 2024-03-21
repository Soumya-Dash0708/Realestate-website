"use client";
import { question } from "./data";
import Accordioncard from "./Accordioncard";

const Accordion = () => {
  return (
    <div className="flex flex-col gap-12 lg:flex-row items-center justify-left mb-12  lg:mb-0 pt-28 lg:pt-0">
      {question.map((card) => (
        <div className="lg:w-3/4 lg:ml-8 max-w-xl md:max-w-3xl" key={card.key}>
          <div className="uppercase font-semibold text-sm text-WhiteGray">
            {card.subHeading}
          </div>
          <div className="font-semibold text-3xl mt-8 text-White uppercase">
            {card.title}
          </div>
          <p className="text-WhiteGray text-sm mt-8 leading-7">
            {" "}
            {card.description}
          </p>
          <br />
          <button className="bg-primary/20 w-[20%] hover:bg-green-700 text-white font-bold  py-2 px-4 rounded-full">
            {card.buttonTitle}
          </button>
        </div>
      ))}
      <Accordioncard />
    </div>
  );
};

export default Accordion;
