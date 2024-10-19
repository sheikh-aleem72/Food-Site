import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Reviews from "../../components/Reviews/Reviews";
import BakeryAboutAccordion from "../../components/BakeryAboutAccordion/BakeryAboutAccordion";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <HeroBanner />
      <Reviews />
      <BakeryAboutAccordion />
    </div>
  );
}
