import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full h-full">
      <div className="container mx-auto py-20">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-black lg:text-3xl md:text-xl text-lg font-medium">
            About Us
          </h1>
          <p className="font-light text-center max-w-md lg:text-sm md:text-sm text-sm mt-4">
            Welcome to Assuch Global, a dynamic conglomerate that transcends
            traditional boundaries, shaping the landscape across real estate,
            agriculture, import and export services, event management, courier
            and logistics, and haulage services. At Assuch Global, we embody a
            commitment to excellence, innovation, and a holistic approach to
            meet the diverse needs of our global clientele.
          </p>
          <Link href="/about">
            {" "}
            <button className="bg-[#C82C2F] mt-16 hover:bg-[#ee5457] px-6 py-2 font-bold rounded-sm text-white font-Montserrat text-[7px] max-w-[180px] ">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
