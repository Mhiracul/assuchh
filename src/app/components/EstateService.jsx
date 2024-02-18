import Image from "next/image";
import React from "react";

const EstateService = () => {
  return (
    <div className="h-full w-full font-Montserrat">
      <div className="container mx-auto px-10 py-20">
        <h1 className="text-black text-2xl font-medium text-center">
          More Services
        </h1>
        <div className="flex flex-col md:mt-20 mt-5 gap-20 py-10">
          <div className="flex lg:flex-row flex-col ">
            <Image
              src="/lease.svg"
              alt=""
              width={100}
              height={100}
              className="w-full"
            />
            <div className="bg-[#DBF0F8] py-10 ">
              <div className="px-10 container mx-auto flex  flex-col md:items-start items-center">
                <h1 className="text-black lg:text-3xl md:text-xl text-lg font-medium">
                  We Lease
                  <div className="w-20 h-0.5 bg-[#C82C2F] mt-1"></div>
                </h1>
                <p className="font-light md:text-start text-center lg:text-sm md:text-sm text-sm mt-4">
                  For business ventures or long-term commitments, Assuch Global
                  offers expert leasing services for a variety of properties,
                  including lands, office spaces, halls, and other structures.
                  Our leasing options are tailored to meet the unique needs of
                  businesses and individuals alike. Leverage our industry
                  insights and negotiation skills to secure the ideal property
                  for your ventures, backed by the reliability of Assuch Global.
                </p>
                <button className="bg-[#C82C2F] mt-16 hover:bg-[#ee5457] px-6 py-2 font-bold rounded-sm text-white font-Montserrat text-[7px] max-w-[180px] ">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col ">
            <Image
              src="/sell.svg"
              alt=""
              width={100}
              height={100}
              className="w-full"
            />
            <div className="bg-[#DBF0F8] py-10 ">
              <div className="px-10 container mx-auto flex  flex-col md:items-start items-center">
                <h1 className="text-black lg:text-3xl md:text-xl text-lg font-medium">
                  We Sell
                  <div className="w-20 h-0.5 bg-[#C82C2F] mt-1"></div>
                </h1>
                <p className="font-light md:text-start text-center lg:text-sm md:text-sm text-sm mt-4">
                  For business ventures or long-term commitments, Assuch Global
                  offers expert leasing services for a variety of properties,
                  including lands, office spaces, halls, and other structures.
                  Our leasing options are tailored to meet the unique needs of
                  businesses and individuals alike. Leverage our industry
                  insights and negotiation skills to secure the ideal property
                  for your ventures, backed by the reliability of Assuch Global.
                </p>
                <button className="bg-[#C82C2F] mt-16 hover:bg-[#ee5457] px-6 py-2 font-bold rounded-sm text-white font-Montserrat text-[7px] max-w-[180px] ">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col ">
            <Image
              src="/buy.svg"
              alt=""
              width={100}
              height={100}
              className="w-full"
            />
            <div className="bg-[#DBF0F8] py-10 ">
              <div className="px-10 container mx-auto flex  flex-col md:items-start items-center">
                <h1 className="text-black lg:text-3xl md:text-xl text-lg font-medium">
                  We Buy
                  <div className="w-20 h-0.5 bg-[#C82C2F] mt-1"></div>
                </h1>
                <p className="font-light md:text-start text-center lg:text-sm md:text-sm text-sm mt-4">
                  For business ventures or long-term commitments, Assuch Global
                  offers expert leasing services for a variety of properties,
                  including lands, office spaces, halls, and other structures.
                  Our leasing options are tailored to meet the unique needs of
                  businesses and individuals alike. Leverage our industry
                  insights and negotiation skills to secure the ideal property
                  for your ventures, backed by the reliability of Assuch Global.
                </p>
                <button className="bg-[#C82C2F] mt-16 hover:bg-[#ee5457] px-6 py-2 font-bold rounded-sm text-white font-Montserrat text-[7px] max-w-[180px] ">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col ">
            <Image
              src="/rent.svg"
              alt=""
              width={100}
              height={100}
              className="w-full"
            />
            <div className="bg-[#DBF0F8] py-10 ">
              <div className="px-10 container mx-auto flex  flex-col md:items-start items-center">
                <h1 className="text-black lg:text-3xl md:text-xl text-lg font-medium">
                  We Rent
                  <div className="w-20 h-0.5 bg-[#C82C2F] mt-1"></div>
                </h1>
                <p className="font-light md:text-start text-center lg:text-sm md:text-sm text-sm mt-4">
                  For business ventures or long-term commitments, Assuch Global
                  offers expert leasing services for a variety of properties,
                  including lands, office spaces, halls, and other structures.
                  Our leasing options are tailored to meet the unique needs of
                  businesses and individuals alike. Leverage our industry
                  insights and negotiation skills to secure the ideal property
                  for your ventures, backed by the reliability of Assuch Global.
                </p>
                <button className="bg-[#C82C2F] mt-16 hover:bg-[#ee5457] px-6 py-2 font-bold rounded-sm text-white font-Montserrat text-[7px] max-w-[180px] ">
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

export default EstateService;
