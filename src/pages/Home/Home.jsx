import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Reviews from "../../components/Reviews/Reviews";
import BakeryAboutAccordion from "../../components/BakeryAboutAccordion/BakeryAboutAccordion";
import ProductShowcase from "../../components/ProductShowcase/ProductShowcase";
import Products from "../../components/Products/Products";
import DiscoverBanner from "../../components/DiscoverBanner/DiscoverBanner";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <HeroBanner />
      <Reviews />
      <BakeryAboutAccordion />
      <ProductShowcase />
      <Products />
      <DiscoverBanner />
    </div>
  );
}
