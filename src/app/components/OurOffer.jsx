import Image from "next/image";
import React from "react";
import Grass from "../../../public/grass.svg";
import Sesame from "../../../public/sesame.svg";
import Chicken from "../../../public/chicken.svg";
import Palmkernel from "../../../public/palmkernel.svg";

const OurOffer = () => {
  return (
    <div className="container mx-auto md:px-10 px-10 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <Image src={Grass} alt="List" className="w-full" />
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

        <div className="max-w-md ">
          <h2 className="text-[#C82C2F] text-3xl font-medium text-center">
            Cultivate Success Worldwide with Assuch Global
          </h2>

          <p className="text-sm text-light mt-10 text-center">
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
