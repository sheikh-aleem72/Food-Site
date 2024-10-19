import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div class="flex items-center space-x-2 bg-[#EEEBDE] p-2 px-4 rounded-md font-bold">
      <button
        class="text-black font-thin"
        onClick={() =>
          quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
        }
      >
        <FaMinus />
      </button>
      <input
        type="text"
        class="w-[100px] bg-transparent text-center outline-none"
        min="1"
        value={quantity}
        max="null"
      />
      <button class="" onClick={() => setQuantity(quantity + 1)}>
        <FaPlus />
      </button>
    </div>
  );
}
