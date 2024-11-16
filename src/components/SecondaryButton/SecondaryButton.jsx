import React from "react";

export default function SecondaryButton({ text, style }) {
  return (
    <button
      className={`p-3 text-xl font-serif bg-white rounded border shadow-md shadow-black border-black hover:shadow-none ${style}`}
    >
      {text}
    </button>
  );
}
