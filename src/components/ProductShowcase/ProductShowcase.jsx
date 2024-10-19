import React, { useState } from "react";
import productShowcase from "/reactProject/Food-Site/src/assets/Images/product-showcase.webp";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

export default function ProductShowcase() {
  return (
    <div className="min-h-[100vh] px-4 md:px-8 py-5 flex flex-col md:flex-row gap-2">
      <div className="md:basis-2/4">
        <img
          className="w-full h-full object-cover rounded-md"
          src={productShowcase}
        />
      </div>
      <div className="md:basis-2/4 w-full md:p-16 px-2 py-2 flex flex-col justify-start gap-2">
        <p className="uppercase text-xs md:text-sm">Get yourself a...</p>
        <h1 className="text-crumbs text-[1.5rem] md:text-[3.2rem] font-serif md:w-[75%] md:leading-[60px]">
          Set Of Baking Tools
        </h1>
        <div>
          <h2 className="text-[1.4rem] font-semibold font-serif">$39.00</h2>
          <p>Tax included.</p>
        </div>
        <div className="flex items-center gap-6 mt-6">
          <p className="text-xl font-semibold">Quality</p>
          <QuantitySelector />
        </div>
        <div className="flex flex-col gap-3 mt-2">
          <SecondaryButton text={"See More"} />
          <PrimaryButton text={"Add To Cart"} />
        </div>
        <p className=" text-sm md:text-md font-serif mt-2">
          Whether you're a novice or a seasoned pro, this toolkit is your
          companion in crafting bakery-quality creations right at home.
        </p>
      </div>
    </div>
  );
}
