import React from "react";
import { BsPerson } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="flex md:flex-row gap-2 flex-col justify-between items-center border-1 w-full px-4 font-serif py-4">
      <div className="flex md:block justify-between w-full md:max-w-[15vw] items-center">
        <h1 className="text-crumbs  md:text-4xl text-2xl cursor-pointer">
          Crumbs
        </h1>
        <p className="md:text-[0.6rem] text-[0.5rem] md:pl-2">OPENS AT 9AM</p>
      </div>
      <div className="lg:flex hidden gap-5 text-xl max-w-[50vw]">
        <a className="hover:border-b-2 transition-all ease-in cursor-pointer delay-200 border-black">
          Menu
        </a>
        <a className="hover:border-b-2 transition-all ease-in cursor-pointer delay-200 border-black">
          Our Story
        </a>
        <a className="hover:border-b-2 transition-all ease-in cursor-pointer delay-200 border-black">
          Recipes
        </a>
        <a className="hover:border-b-2 transition-all ease-in cursor-pointer delay-200 border-black">
          Contact
        </a>
      </div>

      <div className="flex md:flex-row md:justify-normal justify-between items-center gap-4 md:w-auto w-full">
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-4 cursor-pointer">
            <h1>Cart</h1>
            <button className="px-4 py-2 bg-gray-200 rounded-full transform hover:scale-105 hover:bg-gray-300 transition-all ease-in">
              0
            </button>
          </div>

          <button className="px-3 py-3 bg-black rounded-full transform hover:scale-105 transition-all ease-in text-white">
            <IoSearchSharp />
          </button>
          <button className="px-3 py-3 bg-black rounded-full transform hover:scale-105 transition-all ease-in text-white">
            <BsPerson />
          </button>
        </div>
        <div className="lg:hidden block">
          <button className="px-3 py-3 bg-black rounded-full transform hover:scale-105 transition-all ease-in text-white">
            <FaBars />
          </button>
        </div>
      </div>
    </div>
  );
}
