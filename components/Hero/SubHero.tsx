import React from 'react';
import { FaHome } from "react-icons/fa";
import { GiTakeMyMoney, GiStripedSun } from "react-icons/gi";
import { BsFillBuildingsFill } from "react-icons/bs";

const features = [
  {
    icon: <FaHome size={24} className="text-[#A685FA]" />,
    title: "Find Your Dream Home",
  },
  {
    icon: <GiTakeMyMoney size={24} className="text-[#A685FA]" />,
    title: "Unlock Property Value",
  },
  {
    icon: <BsFillBuildingsFill size={24} className="text-[#A685FA]" />,
    title: "Effortless Property Management",
  },
  {
    icon: <GiStripedSun size={24} className="text-[#A685FA]" />,
    title: "Smart Investments, Informed Decisions",
  },
];

const SubHero = () => {
  return (
    <div className="grid grid-cols-1 px-2 sm:grid-cols-2 mdl:grid-cols-4 py-4 gap-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 items-center justify-center w-full h-[160px] lg:h-[222px] rounded-[12px] bg-[#1A1A1A]"
        >
          <span className="border-2 flex items-center justify-center rounded-full border-[#a685fa94] h-[60px] w-[60px]">
            {feature.icon}
          </span>
          <h4 className="text-[17px] px-2 text-center font-semibold text-white">
            {feature.title}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default SubHero;
