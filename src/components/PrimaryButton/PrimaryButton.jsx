import React from "react";

export default function PrimaryButton({ text }) {
  return (
    <button className="text-white bg-black p-3 shadow-md shadow-[#1e1d1d] rounded text-xl font-serif hover:shadow-none">
      {text}
    </button>
  );
}
