import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import product1 from "/reactProject/Food-Site/src/assets/Images/Product1.webp";
import product2 from "/reactProject/Food-Site/src/assets/Images/Product2.webp";
import product3 from "/reactProject/Food-Site/src/assets/Images/Product3.webp";
// import product4 from '/reactProject/Food-Site/src/assets/Images/Product4.webp'
// import product5 from '/reactProject/Food-Site/src/assets/Images/Product5.webp'
// import product6 from '/reactProject/Food-Site/src/assets/Images/Product6.webp'

export default function Products() {
  return (
    <div className="flex py-2 gap-4 md:gap-8 flex-col px-4 md:px-8 w-full min-h-[100vh]">
      <div className="flex justify-between items-center">
        <h1 className="font-serif text-crumbs text-[1.5rem] md:text-5xl">
          Recipes For Success
        </h1>
        <a className="text-crumbs underline hover:underline-offset-2 cursor-pointer text-lg">
          View all
        </a>
      </div>
      <div className="gap-6 md:gap-4 flex flex-wrap w-full">
        <ProductCard
          image={product1}
          date={"January 2024"}
          title={
            "Savory Cheddar Cheese Scones: A Delightful Twist On The Classic Scone"
          }
          desc={
            "Savory Cheddar Cheese Scones are a delightful twist on the classic scone, combining sharp cheddar cheese with a buttery, tender crumb. These scones are perfect for a savory breakfast treat,..."
          }
          width={"lg:w-[50%] md:w-[47%] w-full"}
        />
        <ProductCard
          image={product2}
          date={"January 2024"}
          title={"Cinnamon Swirl Banana Bread: Crumbs Bakery Favorite"}
          desc={
            "Cinnamon Swirl Banana Bread combines the comforting flavors of ripe bananas and a spicy cinnamon swirl. This Crumbs Bakery favorite is known for its moist texture and warming, aromatic spice..."
          }
          width={"lg:w-[23%] md:w-[47%] w-full"}
          hidden={"hidden"}
        />
        <ProductCard
          image={product3}
          date={"January 2024"}
          title={
            "Decadent Fudge Brownies: A Rich Indulgence from Crumbs Bakery"
          }
          desc={
            "Fudge brownies are more than just a dessert; they're a rich, chocolatey journey into decadence. At Crumbs Bakery, our Fudge Brownies are renowned for their gooey center, crackly top, and..."
          }
          width={"lg:w-[23%] md:w-[47%] w-full"}
          hidden={"hidden"}
        />
      </div>
    </div>
  );
}
