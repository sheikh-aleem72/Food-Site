import React from "react";
import heroBanner from "/reactProject/Food-Site/src/assets/Images/hero-banner.svg";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

export default function HeroBanner() {
  return (
    <div className=" flex lg:flex-row flex-col-reverse justify-center items-center md:gap-4 bg-[#DDE3DE] py-2 gap-2">
      <div className="md:basis-2/4 w-full md:p-20 px-2 py-2 flex flex-col gap-4">
        <h1 className="text-5xl lg:text-[6vw] md:text-left md:leading-[80px] font-serif text-wrap text-crumbs text-center leading-[50px]">
          Baking Dreams Come True
        </h1>

        <p className="md:text-xl text-[1.2rem] text-center md:text-left">
          From our oven to your heart - Explore the ultimate baking perfection
          at Crumbs Bakery.
        </p>
        <div className="flex flex-col md:items-start gap-2 font-serif">
          <PrimaryButton text={"Explore Baked Dreams"} />
          <SecondaryButton text={"Bake Your Own"} />
        </div>
      </div>
      <div className="lg:basis-2/4 basis-2/5 flex   p-4">
        <img
          src={heroBanner}
          className="rounded-md lg:h-[80vh]  lg: h-[35vh] w-[100vw] object-cover"
        />
      </div>
    </div>
  );
}
