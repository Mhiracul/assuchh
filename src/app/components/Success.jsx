import Image from "next/image";
import React from "react";
import Fruit1 from "../../../public/charcoal1.svg";
import Fruit2 from "../../../public/cocoa.svg";
import Fruit3 from "../../../public/fruit3.svg";
import Fruit4 from "../../../public/groundnut.svg";
import Fruit5 from "../../../public/cassava1.svg";
import Fruit6 from "../../../public/soya.svg";
import Fruit7 from "../../../public/cashew.svg";
import Fruit8 from "../../../public/lithium2.svg";
import Fruit9 from "../../../public/titanium.svg";

import Link from "next/link";

const Success = () => {
  const handleWhatsAppMessage = (productName) => {
    const message = `Hello, My name is [Your Name]. I would love to make an enquiry on the ${productName}.`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/+2348035491849?text=${encodedMessage}`;
  };

  return (
    <div className="bg-[#DBF0F8]  h-full w-full">
      <div
        style={{
          background: "url('/agricbg.svg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto w-full  py-20 md:px-10 px-10">
          <div className="flex flex-col items-center gap-4">
            <h1 className="md:text-3xl text-xl font-medium ">What We Offer</h1>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-20 mx-auto">
            <div className="md:max-w-[250px] rounded-md  relative">
              <Image src={Fruit1} alt="List" className="w-full rounded-t-md" />
              <div className="bg-[#C82C2F] w-full h-1"></div>
              <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
                <h4 className="text-[15px] font-medium text-center">
                  Charcoal
                </h4>
                <p className="text-[8px] font-light">
                  Our charcoal is made from sustainably sourced hardwood,
                  providing a clean and efficient fuel for grilling, smoking,
                  and outdoor cooking. It burns hot and evenly, giving your food
                  a delicious smoky flavor.
                </p>
                <Link href={handleWhatsAppMessage("Charcoal")}>
                  <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-xs  max-w-[180px]">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            <div className="md:max-w-[250px] rounded-md  relative">
              <Image src={Fruit2} alt="List" className="w-full rounded-t-md" />
              <div className="bg-[#C82C2F] w-full h-1"></div>
              <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
                <h4 className="text-[15px] font-medium text-center">Cocoa</h4>
                <p className="text-[8px] font-light">
                  Our cocoa beans are handpicked from the finest farms, ensuring
                  a rich and flavorful chocolate experience. Whether you{"'"}re
                  making decadent desserts or soothing beverages, our cocoa will
                  elevate your creations.
                </p>
                <Link href={handleWhatsAppMessage("Cocoa")}>
                  <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-xs  max-w-[180px]">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            <div className="md:max-w-[250px] rounded-md  relative">
              <Image src={Fruit3} alt="List" className="w-full rounded-t-md" />
              <div className="bg-[#C82C2F] w-full h-1"></div>
              <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
                <h4 className="text-[15px] font-medium text-center">
                  Sesame Seed
                </h4>
                <p className="text-[8px] font-light">
                  Our sesame seeds are meticulously selected and processed to
                  retain their natural flavor and nutritional benefits. Add them
                  to your dishes for a delightful crunch and nutty taste.
                </p>
                <Link href={handleWhatsAppMessage("Sesame Seed")}>
                  <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-xs  max-w-[180px]">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            <div className="md:max-w-[250px] rounded-md  relative">
              <Image src={Fruit4} alt="List" className="w-full rounded-t-md" />
              <div className="bg-[#C82C2F] w-full h-1"></div>
              <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
                <h4 className="text-[15px] font-medium text-center">
                  Groundnuts
                </h4>
                <p className="text-[8px] font-light">
                  Our groundnuts are handpicked and processed with care to
                  preserve their freshness and flavor. Enjoy them as a
                  nutritious snack or use them in cooking to add a rich, nutty
                  taste to your dishes.
                </p>
                <Link href={handleWhatsAppMessage("Groundnuts")}>
                  <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-xs  max-w-[180px]">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:max-w-[250px] rounded-md  relative">
              <Image src={Fruit5} alt="List" className="w-full rounded-t-md" />
              <div className="bg-[#C82C2F] w-full h-1"></div>
              <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
                <h4 className="text-[15px] font-medium text-center">
                  Dry Cassava Chips
                </h4>
                <p className="text-[8px] font-light">
                  Our dry cassava chips are made from premium quality cassava,
                  sliced thinly and dried to perfection. They are a versatile
                  ingredient used in various dishes and snacks, offering a
                  crispy texture and delightful taste.
                </p>
                <Link href={handleWhatsAppMessage("Dry Cassave Chips")}>
                  <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-xs  max-w-[180px]">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:max-w-[250px] rounded-md  relative">
              <Image src={Fruit6} alt="List" className="w-full rounded-t-md" />
              <div className="bg-[#C82C2F] w-full h-1"></div>
              <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
                <h4 className="text-[15px] font-medium text-center">
                  Soya Beans
                </h4>
                <p className="text-[8px] font-light">
                  Our soya beans are grown organically and processed with care
                  to maintain their nutritional value. They are a versatile
                  ingredient used in various cuisines, providing a good source
                  of protein and essential nutrients.
                </p>
                <Link href={handleWhatsAppMessage("Soya Beans")}>
                  <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-xs  max-w-[180px]">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            <div className="md:max-w-[250px] rounded-md  relative">
              <Image src={Fruit7} alt="List" className="w-full rounded-t-md" />
              <div className="bg-[#C82C2F] w-full h-1"></div>
              <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
                <h4 className="text-[15px] font-medium text-center">
                  Cashew Nuts
                </h4>
                <p className="text-[8px] font-light">
                  Our cashew nuts are carefully selected and processed to
                  preserve their natural flavor and crunchiness. They are a
                  delicious and nutritious snack enjoyed by people of all ages.
                </p>
                <Link href={handleWhatsAppMessage("Cashew Nuts")}>
                  <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-xs  max-w-[180px]">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            <div className="md:max-w-[250px] rounded-md  relative">
              <Image src={Fruit8} alt="List" className="w-full rounded-t-md" />
              <div className="bg-[#C82C2F] w-full h-1"></div>
              <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
                <h4 className="text-[15px] font-medium text-center">Lithium</h4>
                <p className="text-[8px] font-light">
                  Our lithium is sourced responsibly and processed to meet the
                  highest standards of purity. It is used in various industries,
                  including electronics, pharmaceuticals, and energy storage
                  solutions.
                </p>
                <Link href={handleWhatsAppMessage("Lithium")}>
                  <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-xs  max-w-[180px]">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            <div className="md:max-w-[250px] rounded-md  relative">
              <Image src={Fruit9} alt="List" className="w-full rounded-t-md" />
              <div className="bg-[#C82C2F] w-full h-1"></div>
              <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
                <h4 className="text-[15px] font-medium text-center">
                  Titanium
                </h4>
                <p className="text-[8px] font-light">
                  Our titanium is of premium quality, suitable for a wide range
                  of applications in aerospace, automotive, medical, and
                  architectural industries. It offers exceptional strength,
                  durability, and corrosion resistance.
                </p>
                <Link href={handleWhatsAppMessage("Titanium")}>
                  <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-xs  max-w-[180px]">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex  justify-center w-full mt-4 py-6">
            <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2 font-bold rounded-sm text-white font-Montserrat text-xs max-w-[180px] ">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
