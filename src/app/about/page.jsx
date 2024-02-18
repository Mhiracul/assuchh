"use client";
import React from "react";
import Navbar from "../components/Navbar";

const Page = () => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <div className="w-full h-full bg-white">
      <Navbar />
      <div className="container mx-auto py-20 px-10">
        <h1 className="text-black text-center lg:text-3xl md:text-xl text-lg font-medium">
          About Assuch Global
        </h1>

        <div className="mt-10">
          <p className="font-light   lg:text-sm md:text-sm text-sm mt-4">
            Welcome to Assuch Global, a dynamic conglomerate that transcends
            traditional boundaries, shaping the landscape across real estate,
            agriculture, import and export services, event management, courier
            and logistics, and haulage services. At Assuch Global, we embody a
            commitment to excellence, innovation, and a holistic approach to
            meet the diverse needs of our global clientele.
          </p>

          <div className="mt-3">
            <h4>Our Vision:</h4>
            <p className="font-light   lg:text-sm md:text-sm text-sm ">
              At the heart of Assuch Global beats a visionary pulse, steering us
              towards a future where we redefine industry standards, foster
              sustainable practices, and create enduring value for our clients
              and partners.
            </p>
          </div>

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
              n the world of logistics, Assuch Global{"'"}s haulage services
            </p>
          </div>
          <div className="mt-3">
            <h4>Our Commitment:</h4>
            <p className="font-light   lg:text-sm md:text-sm text-sm ">
              At Assuch Global, our commitment is not merely to provide services
              but to forge lasting partnerships. We believe in the power of
              collaboration, innovation, and sustainable practices, driving us
              to redefine industry benchmarks and shape a future where
              possibilities are limitless.
            </p>

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
            className="bg-[#C82C2F] mt-16 hover:bg-[#ee5457] px-6 py-2 font-bold rounded-sm text-white font-Montserrat text-[7px] max-w-[180px]"
            onClick={() => window.history.back()}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
