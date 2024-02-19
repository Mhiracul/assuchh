"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Grass from "../../../public/grass.svg";
import Sesame from "../../../public/sesame.svg";
import Chicken from "../../../public/list3.svg";
import Palmkernel from "../../../public/cocoa.svg";
import Line from "../../../public/zig.svg"; // Import line image
import Image from "next/image";
import Footer from "../components/Footer";
const Page = () => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <div className="w-full h-full bg-white">
      <Navbar />

      <div
        style={{
          background:
            "linear-gradient(99deg, rgba(115, 173, 254, 0.48) 43.16%, rgba(82, 110, 150, 0.00) 76.84%), url('about.avif') lightgray",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "60vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container mx-auto  md:px-32 px-10">
          <div className="flex flex-col  items-center gap-3">
            <h1 className="text-white font-bold md:text-6xl text-3xl">
              About Us
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto md:px-10 px-10 md:py-28 py-10">
        <div className="flex lg:flex-row flex-col items-center md:gap-20 gap-2">
          <div className="relative flex items-center">
            {/* Line image positioned absolutely */}
            <div className="absolute -inset-y-6 left-0 z-10">
              <Image
                src={Line}
                alt=""
                layout="responsive"
                width={1000} // Adjust the width to match the length of the grid
                height={1000} // Adjust the height to match the thickness of the line
                className="w-full h-full"
              />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 z-[99999]">
              <div>
                <Image
                  src={Chicken}
                  alt="List"
                  className="w-full lg:h-96 h-full"
                />
              </div>
              <div>
                <Image
                  src={Palmkernel}
                  alt="List"
                  className="w-full lg:h-96 h-full mt-14"
                />
              </div>
            </div>
          </div>
          <div className="max-w-md md:mt-10 mt-10">
            <h2 className="text-[#C82C2F] text-3xl font-medium md:text-start  text-center">
              WHO WE ARE
            </h2>

            <p className="text-base text-light mt-10 md:text-start text-center">
              {'"'}Welcome to Assuch Global, a dynamic conglomerate that
              transcends traditional boundaries, shaping the landscape across
              real estate, agriculture, import and export services, event
              management, courier and logistics, and haulage services. At Assuch
              Global, we embody a commitment to excellence, innovation, and a
              holistic approach to meet the diverse needs of our global
              clientele.
              {'"'}
            </p>
            <div className="bg-[#ccc] w-full h-[1px] mt-3"></div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:text-start text-center gap-8">
              <div className="bg-white mt-4 rounded-md  py-2">
                <h1 className="text-xl font-bold">Our Commitment</h1>
                <p className="text-xs text-light mt-3">
                  At Assuch Global, our commitment is not merely to provide
                  services but to forge lasting partnerships. We believe in the
                  power of collaboration, innovation, and sustainable practices,
                  driving us to redefine industry benchmarks and shape a future
                  where possibilities are limitless.
                </p>
              </div>

              <div className="bg-white mt-4  rounded-md py-2">
                <h1 className="text-xl font-bold">Our Vision</h1>
                <p className="text-xs text-light mt-3">
                  At the heart of Assuch Global beats a visionary pulse,
                  steering us towards a future where we redefine industry
                  standards, foster sustainable practices, and create enduring
                  value for our clients and partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container bg-white shadow-md mx-auto py-10 px-10">
        <h1 className="text-black text-center lg:text-3xl md:text-xl text-lg font-medium">
          About Assuch Global
        </h1>

        <div className="mt-10">
          <div className="mt-3">
            <h4>Real Estate Excellence: :</h4>
            <p className="font-light   lg:text-sm md:text-sm text-sm ">
              In the realm of real estate, we don{"'"}t just build structures;
              we craft environments where dreams flourish. Whether buying,
              selling, renting, or leasing, Assuch Global is your trusted
              partner in the journey to finding the perfect space that resonates
              with your aspirations.
            </p>
          </div>
          <div className="mt-3">
            <h4>Cultivating Growth in Agriculture:</h4>
            <p className="font-light   lg:text-sm md:text-sm text-sm ">
              With a commitment to agricultural innovation, we sow the seeds of
              progress. Assuch Global ventures into agriculture, employing
              sustainable practices to contribute to food security and the
              prosperity of communities.
            </p>
          </div>
          <div className="mt-3">
            <h4>Seamless Import and Export: :</h4>
            <p className="font-light   lg:text-sm md:text-sm text-sm ">
              Navigating the complexities of global trade, Assuch Global stands
              as a beacon of reliability in import and export services. We
              facilitate seamless cross-border transactions, ensuring the smooth
              flow of goods with efficiency and integrity.
            </p>
          </div>
          <div className="mt-3">
            <h4>Elevating Events with Expertise:</h4>
            <p className="font-light   lg:text-sm md:text-sm text-sm ">
              Event management is our canvas for creating unforgettable
              experiences. From conceptualization to flawless execution, Assuch
              Global transforms occasions into memories, blending creativity
              with meticulous planning.
            </p>
          </div>
          <div className="mt-3">
            <h4>Efficient Courier and Logistics:</h4>
            <p className="font-light   lg:text-sm md:text-sm text-sm ">
              Time is of the essence, and our courier and logistics services
              reflect our commitment to swift and secure deliveries. Assuch
              Global ensures that your packages reach their destination with
              precision and reliability, powering the seamless flow of global
              commerce.
            </p>
          </div>
          <div className="mt-3">
            <h4>Reliable Haulage Service:</h4>
            <p className="font-light   lg:text-sm md:text-sm text-sm ">
              In the world of logistics, Assuch Global{"'"}s haulage services
              are the backbone of efficient transportation. We navigate diverse
              terrains, delivering goods with a commitment to safety,
              timeliness, and professionalism.
            </p>
          </div>
          <div className="mt-3">
            <p className="font-light   lg:text-sm md:text-sm text-sm mt-3">
              Join us on a journey where excellence knows no bounds, and
              together, let{"'"}s build a legacy of success, sustainability, and
              shared prosperity.
            </p>
          </div>
          <p className="font-bold  lg:text-sm md:text-sm text-sm mt-3">
            You get as much as you expect - Assuch Global.
          </p>
          <button
            className="bg-[#C82C2F] mt-16 w-full hover:bg-[#ee5457] px-6 py-2 font-bold rounded-sm text-white font-Montserrat text-[7px] max-w-[180px]"
            onClick={() => window.history.back()}
          >
            Back
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
