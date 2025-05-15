import React from "react";
import HeroPart1 from "./Part1";
import { Urbanist } from "next/font/google";
import HeroPart2 from "./Part2";
import SubHero from "./SubHero";
import FeaturedProperties from "./FeaturedProperties";
import OurClients from "./OurClients";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Hero = () => {
  return (
    <div className={`${urbanist.className} max-w-[1440px] mx-auto`}>
      <div className="sm:flex-row flex h-auto lg:h-[714px] flex-col-reverse items-center justify-between">
        <HeroPart1 />
        <HeroPart2 />
      </div>
      <div className="mt-8">
        <SubHero/>
      </div>
      <div className="mt-8">
        <FeaturedProperties/>
      </div>
      <div className="mt-8">
        <OurClients/>
      </div>
    </div>
  );
};

export default Hero;
