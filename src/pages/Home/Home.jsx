import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Reviews from "../../components/Reviews/Reviews";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <HeroBanner />
      <Reviews />
    </div>
  );
}
