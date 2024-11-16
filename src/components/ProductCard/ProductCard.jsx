import React from "react";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

export default function ProductCard({
  image,
  date,
  title,
  desc,
  width,
  hidden,
}) {
  return (
    <div
      className={`flex flex-col rounded max-h-[100vh] ${width} gap-2 cursor-pointer hover:overflow-hidden`}
    >
      <img
        src={image}
        className="rounded md:h-[45vh] min-h-[35%] object-cover transition-transform duration-1000 ease-in-out transform hover:scale-[1.02] "
      />
      <div className="p-1 flex flex-col gap-2 justify-between py-2 px-2">
        <div className="flex flex-col gap-2">
          <h5 className="uppercase text-md leading-[15px] hover:underline-none">
            {date}
          </h5>
          <h1 className="font-serif capitalize text-2xl md:text-2xl hover:underline">
            {title}
          </h1>
          <h4 className={`text-md text-justify lg:${hidden}`}>{desc}</h4>
        </div>
        <div className="">
          <SecondaryButton
            text="Read More"
            style={"w-full lg:w-[200px] py-2"}
          />
        </div>
      </div>
    </div>
  );
}
