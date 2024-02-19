import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurSolution = () => {
  const handleWhatsAppMessage = (productName) => {
    const message = `Hello, My name is [Your Name]. I would love to make an enquiry on the ${productName}.`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/+2348035491849?text=${encodedMessage}`;
  };
  return (
    <div className="bg-[#DBF0F8] font-Montserrat h-full w-full">
      <div
        style={{
          background: "url('/tradingbg.svg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container py-20 mx-auto lg:px-40 md:px-20 px-10 ">
          <h1 className="text-xl text-center text-black font-bold">
            Our Solutions
          </h1>
          <div className="flex flex-col md:items-start items-center gap-32 mt-10">
            <div className="flex md:flex-row w-full gap-10 items-center flex-col justify-between">
              <Image
                src="/import1.svg"
                alt=""
                width={100}
                height={100}
                className="lg:w-96 md:w-72 w-full"
              />

              <div className="flex flex-col md:items-start items-center gap-4 md:max-w-sm max-w-none">
                <h1 className="text-black  lg:text-3xl md:text-xl text-lg font-medium font-Montserrat">
                  Importation Service
                  <div className="w-20 h-0.5 bg-[#C82C2F] mt-2"></div>
                </h1>
                <p className="font-normal md:text-start text-center lg:text-xl md:text-base text-sm mt-4">
                  Our seamless Importation service tailored for your <br />{" "}
                  business needs.
                </p>

                <Link href={handleWhatsAppMessage("Importation Services")}>
                  <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold  text-white font-Montserrat text-xs  max-w-[180px]">
                    Contact Agent
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex md:flex-row w-full items-center  gap-4 flex-col-reverse justify-between">
              <div className="flex flex-col md:items-start items-center gap-4 max-w-sm">
                <h1 className="text-black lg:text-3xl md:text-xl text-lg font-medium font-Montserrat">
                  Exportation Service
                  <div className="w-20 h-0.5 bg-[#C82C2F] mt-2"></div>
                </h1>
                <p className="font-normal md:text-start text-center lg:text-xl md:text-base text-sm mt-4">
                  Our seamless Importation service tailored for your <br />{" "}
                  business needs.
                </p>

                <Link href={handleWhatsAppMessage("Exportation Services")}>
                  <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold  text-white font-Montserrat text-xs  max-w-[180px]">
                    Contact Agent
                  </button>
                </Link>
              </div>
              <Image
                src="/Export2.svg"
                alt=""
                width={100}
                height={100}
                className="lg:w-96 md:w-72 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSolution;
