import Image from "next/image";
import Link from "next/link";
import React from "react";

const BusinessService = () => {
  const handleWhatsAppMessage = (productName) => {
    const message = `Hello, My name is [Your Name]. I would love to make an enquiry on the ${productName}.`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/+2348035491849?text=${encodedMessage}`;
  };
  return (
    <div className="h-full w-full">
      <div className="  py-20">
        <div className="flex flex-col gap-20">
          <div className="bg-white container lg:px-20 px-10 mx-auto w-full relative flex lg:flex-row gap-20 flex-col justify-between items-center">
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
            <div className="lg:block lg:absolute bottom-0 md:left-96 md:bottom-38 right-0 lg:right-0 lg:-bottom-10 z-10">
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
                Courier & Logistics Service
                <div className="w-20 h-0.5 bg-[#C82C2F] mt-2"></div>
              </h1>

              <p className="font-normal max-w-md md:text-start text-center lg:text-sm md:text-sm text-sm mt-4">
                Our comprehensive courier and logistics services ensure timely{" "}
                and secure delivery of your goods, anywhere in the world.
              </p>
              <Link href={handleWhatsAppMessage("Courier & Logistics Service")}>
                <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold  text-white font-Montserrat text-xs  max-w-[180px]">
                  Contact Agent
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-[#DBF0F8] py-20 w-full ">
            {/* First Image */}
            <div className="container mx-auto relative md:px-20 px-10  flex lg:flex-row gap-20 flex-col justify-between items-center">
              <div className="relative mb-4 lg:mb-0">
                <Image
                  src="/haulage.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="lg:w-96 md:w-full w-full"
                />
              </div>

              {/* Second Image */}
              <div className="lg:block lg:absolute bottom-0 md:left-96 md:bottom-38 right-0 lg:right-0 lg:-bottom-10 z-10">
                <Image
                  src="/haulage2.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="lg:w-32 md:w-40 w-full"
                />
              </div>

              <div className="flex flex-col lg:items-start items-center gap-4">
                <h1 className="text-black lg:text-3xl md:text-xl text-lg font-medium font-Montserrat">
                  Haulage Service
                  <div className="w-20 h-0.5 bg-[#C82C2F] mt-2"></div>
                </h1>

                <p className="font-normal max-w-md md:text-start text-center lg:text-sm md:text-sm text-sm mt-4">
                  With our efficient haulage services, we guarantee safe and{" "}
                  prompt transportation of your goods, meeting your business
                  needs with reliability and professionalism.
                </p>
                <Link href={handleWhatsAppMessage("Haulage Service")}>
                  <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold  text-white font-Montserrat text-xs  max-w-[180px]">
                    Contact Agent
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white py-20 w-full ">
            <div className="container mx-auto md:px-20 px-10 relative  flex lg:flex-row gap-20 flex-col justify-between items-center">
              <div className="relative mb-4 lg:mb-0">
                <Image
                  src="/event.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="lg:w-96 md:w-full w-full"
                />
              </div>

              {/* Second Image */}
              <div className="lg:block lg:absolute bottom-0 md:left-96 md:bottom-38 right-0 lg:right-0 lg:-bottom-10 z-10">
                <Image
                  src="/event2.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="lg:w-32 md:w-40 w-full"
                />
              </div>

              <div className="flex flex-col lg:items-start items-center gap-4">
                <h1 className="text-black lg:text-3xl md:text-xl text-lg font-medium font-Montserrat">
                  Event Management
                  <div className="w-20 h-0.5 bg-[#C82C2F] mt-2"></div>
                </h1>

                <p className="font-normal max-w-md md:text-start text-center lg:text-sm md:text-sm text-sm mt-4">
                  Let us handle every detail of your event with precision and
                  creativity. From planning to execution, our event management
                  services ensure a memorable and seamless experience for you
                  and your guests.
                </p>
                <Link href={handleWhatsAppMessage("Event Management")}>
                  <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold  text-white font-Montserrat text-xs  max-w-[180px]">
                    Contact Agent
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessService;
