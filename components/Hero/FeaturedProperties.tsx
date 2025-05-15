import Image from "next/image";
import React from "react";
import Image1 from "@/images/FeaturedPropertyImg1.png";
import Image2 from "@/images/FeaturedPropertyImg2.png";
import Image3 from "@/images/FeaturedPropertyImg3.png";
import { IoBedOutline } from "react-icons/io5";
import { LuToilet } from "react-icons/lu";
import { MdVilla } from "react-icons/md";

const properties = [
  {
    img: Image1,
    title: "Seaside Serenity Villa",
    desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More",
    beds: "4-Bedrooms",
    baths: "3-Bathrooms",
    type: "Villa",
    price: "$550,000",
  },
  {
    img: Image2,
    title: "Metropolitan Haven",
    desc: "A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More",
    beds: "2-Bedrooms",
    baths: "2-Bathrooms",
    type: "Villa",
    price: "$550,000",
  },
  {
    img: Image3,
    title: "Seaside Serenity Villa",
    desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More",
    beds: "3-Bedrooms",
    baths: "3-Bathrooms",
    type: "Villa",
    price: "$550,000",
  },
];

const FeaturedProperties = () => {
  return (
    <div className="py-6 px-3">
      <h2 className="text-[48px] text-white font-semibold">
        Featured Properties
      </h2>

      <p className="text-[18px] font-medium text-[#999999]">
        Explore our handpicked selection of featured properties. Each listing
        offers a glimpse into exceptional homes and investments available
        through Estatein. Click "View Details" for more information.
      </p>

      <div className="grid grid-cols-1 sml:grid-cols-2 lgll:grid-cols-3 gap-4 mt-8">
        {properties.map((item, index) => (
          <div className="flex items-center justify-center h-auto py-4 border-2 rounded-[6px] border-[#262626]">
            <div className="flex flex-col  justify-between gap-4 px-3">
              <Image src={item.img} alt="Image" className="h-[318px] w-full " />
              <div className="h-auto bg-[#1a1a1a] rounded-[4px] p-2 flex flex-col items-start justify-between">
                <h3 className="text-[24px] font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-[18px] mt-3 font-medium text-[#999999]">
                  {item.desc}
                </p>
                <div className="grid grid-cols-1 mt-3 w-full xms:grid-cols-3 sm:grid-cols-1 md:grid-cols-2  gap-2 justify-items-center">
                  <div className="w-full xms:w-[150px] sm:w-full md:w-full h-[42px] bg-[#262626] gap-2 rounded-[28px] flex items-center justify-center">
                    <IoBedOutline size={24} className="text-white" />
                    <p className="text-[18px] font-medium text-white">
                      {item.beds}
                    </p>
                  </div>
                  <div className="w-full xms:w-[150px] sm:w-full md:w-full h-[42px] bg-[#262626] gap-2 rounded-[28px] flex items-center justify-center">
                    <LuToilet size={24} className="text-white" />
                    <p className="text-[18px] font-medium text-white">
                      {item.baths}
                    </p>
                  </div>
                  <div className="w-full xms:w-[150px] sm:w-full md:w-full h-[42px] bg-[#262626] gap-2 rounded-[28px] flex items-center justify-center">
                    <MdVilla size={24} className="text-white" />
                    <p className="text-[18px] font-medium text-white">
                      {item.type}
                    </p>
                  </div>
                </div>
                <div className="flex items-center mt-3 gap-4  justify-between w-full h-[65px] ">
                  <span className="flex flex-col gap-1">
                    <p className="text-[#999999] text-[18px] font-medium">
                      Price
                    </p>
                    <h4 className="text-[24px] font-semibold text-white">
                      {item.price}
                    </h4>
                  </span>
                  <button className="w-[130px] xsm:w-[220px] sm:w-[160px] mdl:w-[220px] h-[63px] bg-[#703BF7] text-white rounded-[10px]">
                    View Property Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
