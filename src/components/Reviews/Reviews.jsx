import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

export default function Reviews() {
  return (
    <div className="w-full flex  md:flex-row flex-col gap-6 px-4 md:px-8 my-4 justify-between">
      <ReviewCard
        review={'"The Best Croissants Outside of Paris!"'}
        reviewer={"Julien S."}
      />
      <ReviewCard review={'"A Taste of Heaven"'} reviewer={"Emma J."} />
      <ReviewCard
        review={'"Morning Ritual Perfection"'}
        reviewer={"Sophia R."}
      />
    </div>
  );
}
