import React from "react";

export default function ReviewCard({ review, reviewer }) {
  return (
    <div className="flex flex-col px-4 md:px-8 md:py-6 py-4 md:w-[33%] w-full bg-[#EEEBDE] rounded">
      <p className="font-serif text-crumbs text-[1.5rem]">{review}</p>
      <h2 className="">- {reviewer}</h2>
    </div>
  );
}
