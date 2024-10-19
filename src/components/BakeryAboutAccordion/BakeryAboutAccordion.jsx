import React from "react";
import bakeryImage from "/reactProject/Food-Site/src/assets/Images/bakery-image.webp";
import Accordion from "../Accordion/Accordion";

export default function BakeryAboutAccordion() {
  return (
    <div className="min-h-[100vh] px-4 md:px-8 py-4 flex flex-col md:flex-row gap-2">
      <div className="md:basis-2/4">
        <img
          className="w-full h-full object-cover rounded-md"
          src={bakeryImage}
        />
      </div>
      <div className="md:basis-2/4 w-full md:p-16 px-2 py-2 flex flex-col gap-4 justify-start">
        <div className="border-b border-b-gray-500">
          <h1 className="text-3xl md:text-[4vw]  md:leading-[60px] font-serif text-wrap text-crumbs leading-[35px] pb-5">
            More Than Baking
          </h1>
        </div>
        <div className="font-serif flex flex-col gap-6">
          <Accordion
            heading={"Our Philosophy"}
            contentHeading={"Crafting Joy, One Bake at a Time"}
            content={
              "At Crumbs Bakery, we believe in the art of baking from the heart. Our philosophy is simple yet profound – every baked good should not only taste delightful but also bring a moment of joy to those who savor it. Our commitment to quality ingredients, traditional methods, and innovative flavors ensures that every bite tells a story of passion and craftsmanship."
            }
          />
          <Accordion
            heading={"Our Team"}
            contentHeading={"Bakers, Dreamers, and Artisans United"}
            content={
              "Behind every mouth-watering treat at Crumbs Bakery is our team of dedicated bakers and staff. Skilled in the art of baking, our team brings a wealth of experience, creativity, and love to every recipe. From master bakers to friendly customer service, our team is the heartbeat of Crumbs Bakery, committed to making your experience memorable."
            }
          />
          <Accordion
            heading={"Sustainability"}
            contentHeading={"Baking a Better Tomorrow"}
            content={
              "Sustainability is at the core of our operations at Crumbs Bakery. We are committed to environmentally friendly practices, from sourcing local, organic ingredients to minimizing waste in our baking processes. Our goal is to provide delicious baked goods while being mindful of our environmental footprint, ensuring a healthier planet for future generations."
            }
          />
          <Accordion
            heading={"Community"}
            contentHeading={"Serving Sweetness, Supporting Communities"}
            content={
              "Crumbs Bakery is more than just a bakery; it's a community hub. We actively engage in local events, support charities, and host baking workshops. By giving back to the community, we aim to spread not just sweetness but also the spirit of generosity and collaboration, fostering a stronger, more connected community."
            }
          />
        </div>
      </div>
    </div>
  );
}
