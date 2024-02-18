import Image from "next/image";
import React from "react";

const BusinessService = () => {
  return (
    <div className="h-full w-full">
      <div className=" container  py-20">
        <div className="flex flex-col gap-20">
          <div className="bg-white container mx-auto w-full relative flex lg:flex-row gap-20 flex-col justify-between items-center">
            {/* First Image */}
            <div className="relative mb-4 lg:mb-0">
              <Image
                src="/courier.svg"
                alt=""
                width={100}
                height={100}
                className="lg:w-96 md:w-full w-full"
              />
            </div>

            {/* Second Image */}
            <div className="lg:block md:hidden hidden lg:absolute bottom-60 md:left-96 md:bottom-38 left-60 lg:left-60 lg:-bottom-10 z-10">
              <Image
                src="/side1.svg"
                alt=""
                width={100}
                height={100}
                className="lg:w-32 md:w-40 w-full"
              />
            </div>

            <div className="flex flex-col lg:items-start items-center gap-4">
              <h1 className="text-black lg:text-3xl md:text-xl text-lg font-medium font-Montserrat">
                Exportation Service
                <div className="w-20 h-0.5 bg-[#C82C2F] mt-2"></div>
              </h1>

              <p className="font-normal md:text-start text-center lg:text-xl md:text-base text-sm mt-4">
                Our seamless Importation service tailored for your <br />{" "}
                business needs.
              </p>
              <button className="bg-[#C82C2F] mt-4 hover:bg-[#ee5457] px-6 py-2 font-bold rounded-sm text-white font-Montserrat text-[7px] max-w-[180px] ">
                Contact Agent
              </button>
            </div>
          </div>

          <div className="bg-[#DBF0F8] py-20 w-full ">
            {/* First Image */}
            <div className="container mx-auto relative  flex lg:flex-row gap-20 flex-col justify-between items-center">
              <div className="relative mb-4 lg:mb-0">
                <Image
                  src="/Export2.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="lg:w-96 md:w-full w-full"
                />
              </div>

              {/* Second Image */}
              <div className="lg:block md:hidden hidden lg:absolute bottom-60 md:left-96 md:bottom-38 left-60 lg:left-60 lg:-bottom-10 z-10">
                <Image
                  src="/side1.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="lg:w-32 md:w-40 w-full"
                />
              </div>

              <div className="flex flex-col lg:items-start items-center gap-4">
                <h1 className="text-black lg:text-3xl md:text-xl text-lg font-medium font-Montserrat">
                  Exportation Service
                  <div className="w-20 h-0.5 bg-[#C82C2F] mt-2"></div>
                </h1>

                <p className="font-normal md:text-start text-center lg:text-xl md:text-base text-sm mt-4">
                  Our seamless Importation service tailored for your <br />{" "}
                  business needs.
                </p>
                <button className="bg-[#C82C2F] mt-4 hover:bg-[#ee5457] px-6 py-2 font-bold rounded-sm text-white font-Montserrat text-[7px] max-w-[180px] ">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white py-20 w-full ">
            <div className="container mx-auto relative  flex lg:flex-row gap-20 flex-col justify-between items-center">
              <div className="relative mb-4 lg:mb-0">
                <Image
                  src="/Export2.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="lg:w-96 md:w-full w-full"
                />
              </div>

              {/* Second Image */}
              <div className="lg:block md:hidden hidden lg:absolute bottom-60 md:left-96 md:bottom-38 left-60 lg:left-60 lg:-bottom-10 z-10">
                <Image
                  src="/side1.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="lg:w-32 md:w-40 w-full"
                />
              </div>

              <div className="flex flex-col lg:items-start items-center gap-4">
                <h1 className="text-black lg:text-3xl md:text-xl text-lg font-medium font-Montserrat">
                  Exportation Service
                  <div className="w-20 h-0.5 bg-[#C82C2F] mt-2"></div>
                </h1>

                <p className="font-normal md:text-start text-center lg:text-xl md:text-base text-sm mt-4">
                  Our seamless Importation service tailored for your <br />{" "}
                  business needs.
                </p>
                <button className="bg-[#C82C2F] mt-4 hover:bg-[#ee5457] px-6 py-2 font-bold rounded-sm text-white font-Montserrat text-[7px] max-w-[180px] ">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessService;
