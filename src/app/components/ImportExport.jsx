import React from "react";
import Image from "next/image";
import Circle1Image from "../../../public/circle1.svg"; // Replace with your circle image paths
import Circle2Image from "../../../public/circle2.svg";
import Circle3Image from "../../../public/circle3.svg";
import { GiAirplaneArrival } from "react-icons/gi";
import { GiAirplaneDeparture } from "react-icons/gi";

const ImportExport = () => {
  return (
    <div className=" h-full py-20 px-10">
      <div className="relative flex justify-center font-Montserrat items-center  py-20">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72">
          <Image
            src={Circle1Image}
            alt="Circle 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2 w-96 h-96">
          <Image
            src={Circle2Image}
            alt="Circle 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 translate-x-1/2 w-48 h-48">
          <Image
            src={Circle3Image}
            alt="Circle 3"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="z-10   ">
          <div className="flex md:flex-row flex-col gap-20">
            <div className="bg-white border-[#C82C2F] border-2 md:px-8 px-2 md:pr-20 pr-4  py-4">
              <GiAirplaneArrival color="#C82C2F" size={25} />

              <h1 className="text-[#00ADEF] mt-3 lg:text-2xl md:text-xl text-lg font-medium ">
                Importation Service
              </h1>
              <p className="font-light md:max-w-[200px] max-w-md  lg:text-base md:text-sm text-sm mt-4">
                Our seamless Importation service tailored for your business
                needs.
              </p>
            </div>

            <div className="bg-white border-[#00ADEF] border-2 md:px-8 px-2 md:pr-20 pr-4 py-4">
              <GiAirplaneDeparture color="#000" size={25} />

              <h1 className="text-[#C82C2F] mt-3 lg:text-2xl md:text-xl text-lg font-medium ">
                Exportation Service
              </h1>
              <p className="font-light md:max-w-[200px] max-w-md  lg:text-base md:text-sm text-sm mt-4">
                Our seamless Importation service tailored for your business
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportExport;
