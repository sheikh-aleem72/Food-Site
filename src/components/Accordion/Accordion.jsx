import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function Accordion({ heading, contentHeading, content }) {
  const [accordionState, setAccordionState] = useState("hidden");
  return (
    <div className="flex flex-col gap-2 border-b border-b-gray-400 pb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => {
          setAccordionState(accordionState == "hidden" ? "flex" : "hidden");
        }}
      >
        <h1
          className={`text-2xl font-serif hover:underline underline-transition transition-colors duration-300 ${
            accordionState === "flex" ? "underline" : ""
          }`}
        >
          {heading}
        </h1>
        <button className="p-4 rounded-full bg-white md:text-xl border border-black">
          {accordionState === "hidden" ? <FaArrowDown /> : <FaArrowUp />}
        </button>
      </div>
      <div
        className={`${accordionState} flex-col gap-4  transition delay-500 ease-in-out duration-300`}
      >
        <h1 className="text-xl">{contentHeading}</h1>
        <p className="text-black text-md">{content}</p>
      </div>
    </div>
  );
}
