import React from "react";
import { FiSearch } from "react-icons/fi";

const Agent = () => {
  return (
    <div className="bg-white h-full w-full">
      <div className="container mx-auto w-full  py-32 md:px-32 px-10">
        <div className="flex flex-col items-center gap-16">
          <h1 className="md:text-3xl text-xl text-center font-medium">
            A Real Estate Agent You Can Trust
          </h1>
          <p className="md:text-base text-xs text-center font-light">
            We are trusted by many happy clients whom we helped achieve their
            dreams. <br />
            You can be the next.
          </p>

          <div className="h-6 justify-between items-center gap-2 w-[500px] p-5 border rounded-md md:flex hidden">
            <div className="flex flex-row gap-5 items-center ">
              <div className="w-4 h-4 justify-center items-center flex">
                <div className="w-4 h-4 relative">
                  <FiSearch />
                </div>
              </div>
              <input
                placeholder="Search by City"
                className="placeholder:text-neutral-400 text-gray-900 text-xs font-normal leading-normal tracking-tight w-[50%] focus:border-0 focus:outline-none focus:ring-0 font-Montserrat"
              />
            </div>
            <select className="pl-5 outline-none border-l-2 text-xs border-[#00000066]">
              <option>Explore</option>
              <option>Browse</option>
            </select>
          </div>
          <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2 font-bold rounded-sm text-white font-Montserrat text-xs max-w-[180px] ">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Agent;
