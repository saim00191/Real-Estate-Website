import React from "react";

const HeroPart1 = () => {
  return (
    <div className="bg-[#141414] w-full sm:w-[820px] h-auto sm:h-[600px] lg:h-[714px] flex flex-col items-center justify-center">
      <div className="flex flex-col justify-between px-2 xsm:px-5 sm:px-2">
        <div className="flex mt-4 sm:mt-0 flex-col items-start sm:items-center justify-start sm:justify-center ">
          <h2 className="leading-[60px] smx:leading-[80px] lg:leading-[100px] text-[29px] sml:text-[35px] md:text-[50px] text-start lg:text-[60px] text-white font-semibold">
            Discover Your Dream Property with Estatein
          </h2>
          <p className="text-[#999999] text-[18px] font-medium">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
        </div>
        <div className="flex flex-col xs:flex-row items-center gap-4 mt-6 mdll:mt-7 lg:mt-10">
          <button className="w-[139px] h-[63px] bg-[#262626] rounded-[10px] text-[18px] text-white font-medium">
            Learn More
          </button>
          <button className="w-[191px] h-[63px] bg-[#703BF7] rounded-[10px] text-[18px] text-white font-medium">
            Browse Properties
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5 mdll:mt-7 lg:mt-16">
          <div className="bg-[#1A1A1A] h-[99px] w-full lgl:w-[192px] rounded-[10px] flex items-center justify-center">
            <span className="flex flex-col gap-2 px-2 w-full items-center md:items-start">
              <p className="text-[26px] mdll:text-[30px] font-bold text-white">
                200+
              </p>
              <p className="text-[#999999] text-[14px] mdll:text-[16px] font-medium">
                Happy Customers
              </p>
            </span>
          </div>

          <div className="bg-[#1A1A1A] h-[99px] w-full lgl:w-[192px] rounded-[10px] flex items-center justify-center">
            <span className="flex flex-col gap-2 px-2 w-full items-center md:items-start">
              <p className="text-[26px] mdll:text-[30px] font-bold text-white">
                10k+
              </p>
              <p className="text-[#999999] text-[14px] mdll:text-[16px] font-medium">
                Properties For Clients
              </p>
            </span>
          </div>

          <div className="bg-[#1A1A1A] h-[99px] w-full col-span-2 md:col-span-1 lgl:w-[192px] rounded-[10px] flex items-center justify-center">
            <span className="flex flex-col gap-2 px-2 w-full items-center md:items-start">
              <p className="text-[26px] mdll:text-[30px] font-bold text-white">
                16+
              </p>
              <p className="text-[#999999] text-[14px] mdll:text-[16px] font-medium">
                Years of Experience
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPart1;
