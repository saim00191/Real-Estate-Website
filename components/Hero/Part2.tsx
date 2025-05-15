import Image from "next/image";
import React from "react";
import Image1 from "@/images/HeroImg.png";
const HeroPart2 = () => {
  return (
    <div className="bg-[#1A1A1A] w-full sm:w-[700px] h-auto sm:h-[600px] lg:h-[714px]">
      <Image src={Image1} alt="Image1" className="h-[400px] sm:h-full" />
    </div>
  );
};

export default HeroPart2;
