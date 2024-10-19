import React, { useState } from "react";
import { IoArrowDown } from "react-icons/io5";
import visa from "/reactProject/Food-Site/src/assets/Images/visa.svg";
import paypal from "/reactProject/Food-Site/src/assets/Images/paypal.svg";
import americanExpress from "/reactProject/Food-Site/src/assets/Images/american-express.svg";
import discover from "/reactProject/Food-Site/src/assets/Images/discover.svg";
import rupay from "/reactProject/Food-Site/src/assets/Images/rupay.svg";
import mastercard from "/reactProject/Food-Site/src/assets/Images/mastercard.svg";

export default function Footer() {
  const [langDialogue, setLangDialogue] = useState("hidden");

  return (
    <div className="min-h-[240px] mt-8 bg-[#202020] text-white flex flex-col w-full md:items-normal items-center px-6 py-4 gap-6 ">
      <div className="flex md:flex-row flex-col md:justify-between justify-center w-full items-center gap-3">
        <div className="">
          <h1 className="uppercase opacity-90 text-[0.9rem]">Language</h1>
          <div
            className="flex items-center justify-center text-xl gap-1 py-2 relative"
            onClick={() =>
              setLangDialogue(langDialogue == "hidden" ? "block" : "hidden")
            }
          >
            <h1 className="hover:border-b-2 transition-all ease-in cursor-pointer delay-200 border-white">
              English
            </h1>
            <IoArrowDown />

            <div
              className={`absolute md:w-[200px] w-[40vw] bg-[#383636] p-4 bottom-14 left-0 rounded ${langDialogue} transition-all ease-in delay-1000`}
            >
              <h1 className="cursor-pointer">English</h1>
            </div>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          <img src={paypal} className="w-[35px] cursor-pointer" />
          <img src={mastercard} className="w-[35px] cursor-pointer" />
          <img src={rupay} className="w-[40px] cursor-pointer" />
          <img src={americanExpress} className="w-[35px] cursor-pointer" />
          <img src={discover} className="w-[35px] cursor-pointer" />
          <img src={visa} className="w-[35px] cursor-pointer" />
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:justify-between justify-center w-full items-center gap-3">
        <div className="flex gap-6 text-lg flex-wrap justify-center">
          <a className="hover:border-b-2 transition-all ease-in cursor-pointer delay-200 border-white">
            Search
          </a>
          <a className="hover:border-b-2 transition-all ease-in cursor-pointer delay-200 border-white">
            Privacy Policy
          </a>
          <a className="hover:border-b-2 transition-all ease-in cursor-pointer delay-200 border-white">
            Cookie Policy
          </a>
          <a className="hover:border-b-2 transition-all ease-in cursor-pointer delay-200 border-white">
            Contact
          </a>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <p>©</p>
            <h1 className="text-[1rem] md:text-[3rem] font-serif">Crumbs</h1>
          </div>
          <p className="text-right">Powered by Vercel</p>
        </div>
      </div>
      <div className="border-t-2 border-white w-full">
        <p className="text-center pt-2">Developed by Shekh Aalim</p>
      </div>
    </div>
  );
}
