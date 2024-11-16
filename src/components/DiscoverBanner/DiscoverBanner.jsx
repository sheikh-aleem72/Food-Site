import storyBanner from "../../assets/Images/story-image.webp";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function DiscoverBanner() {
  return (
    <div className="h-[80vh] mt-10 w-full px-4 md:px-8 gap-2 relative flex flex-col justify-center items-center">
      <img src={storyBanner} className="h-full w-full object-cover rounded" />
      <div className="absolute w-[70%] flex flex-col justify-center items-normal md:items-center  gap-2">
        <h1 className=" text-[10vw] md:text-[5rem] leading-tight  text-center text-white font-serif">
          Discover the Crumbly Path to Happiness
        </h1>
        <PrimaryButton text={"Our story"} />
      </div>
    </div>
  );
}
