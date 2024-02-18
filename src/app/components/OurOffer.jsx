import Image from "next/image";
import React from "react";
import Grass from "../../../public/grass.svg";
import Sesame from "../../../public/sesame.svg";
import Chicken from "../../../public/chicken.svg";
import Palmkernel from "../../../public/palmkernel.svg";
import Line from "../../../public/line.svg"; // Import line image

const OurOffer = () => {
  return (
    <div className="container mx-auto md:px-10 px-10 py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="relative flex items-center">
          {/* Line image positioned absolutely */}
          <div className="absolute -inset-y-16 left-0 z-10">
            <Image
              src={Line}
              alt=""
              layout="responsive"
              width={1000} // Adjust the width to match the length of the grid
              height={7} // Adjust the height to match the thickness of the line
              className="w-full"
            />
          </div>
          <div className="  grid grid-cols-2 gap-8 z-[99999]">
            <div>
              <Image src={Grass} alt="List" className="w-full z-[99999]" />
            </div>
            <div>
              <Image src={Sesame} alt="List" className="w-full" />
            </div>
            <div>
              <Image src={Chicken} alt="List" className="w-full" />
            </div>
            <div>
              <Image src={Palmkernel} alt="List" className="w-full" />
            </div>
          </div>
        </div>
        <div className="max-w-md mt-10">
          <h2 className="text-[#C82C2F] text-3xl font-medium text-center">
            Cultivate Success Worldwide with Assuch Global
          </h2>

          <p className="text-base text-light mt-10 text-center">
            {'"'}Empower Your Harvest: Explore endless possibilities with Assuch
            Global, your premier agricultural destination. From cutting-edge
            technologies to expert insights, we cultivate success for farmers
            worldwide. Join us in sowing the seeds of a thriving future. Grow
            with Assuch Global, where innovation meets agriculture.{'"'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurOffer;
