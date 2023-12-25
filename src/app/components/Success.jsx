import Image from "next/image";
import React from "react";
import Fruit1 from "../../../public/fruit1.svg";
import Fruit2 from "../../../public/fruit2.svg";
import Fruit3 from "../../../public/fruit3.svg";
import Fruit4 from "../../../public/fruit4.svg";
//import Fruit5 from "../../../public/fruit5.svg";
//import Fruit6 from "../../../public/fruit6.svg";
//import Fruit7 from "../../../public/fruit7.svg";
//import Fruit8 from "../../../public/fruit8.svg";
import Link from "next/link";

const Success = () => {
  return (
    <div className="bg-[#DBF0F8]  h-full w-full">
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
                Food Crops
              </h4>
              <p className="text-[8px] font-light">
                High-quality food crops ranging from: Cereals (e.g., rice,
                wheat, maize, sorghum, ragi) Pulses (e.g., lentils, chickpeas,
                beans) Fruits (e.g., apples, oranges, bananas) Vegetables (e.g.,
                tomatoes, carrots, lettuce) Nuts (e.g., almonds, walnuts,
                cashews)
              </p>
              <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-[7px]  max-w-[180px]">
                <Link href="https://wa.me/+2348035491849">Contact Us</Link>
              </button>
            </div>
          </div>

          <div className="md:max-w-[250px] rounded-md  relative">
            <Image src={Fruit2} alt="List" className="w-full rounded-t-md" />
            <div className="bg-[#C82C2F] w-full h-1"></div>
            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <h4 className="text-[15px] font-medium text-center">Livestock</h4>
              <p className="text-[8px] font-light">
                High-quality food crops ranging from: Cereals (e.g., rice,
                wheat, maize, sorghum, ragi) Pulses (e.g., lentils, chickpeas,
                beans) Fruits (e.g., apples, oranges, bananas) Vegetables (e.g.,
                tomatoes, carrots, lettuce) Nuts (e.g., almonds, walnuts,
                cashews)
              </p>
              <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-[7px]  max-w-[180px]">
                <Link href="https://wa.me/+2348035491849">Contact Us</Link>
              </button>
            </div>
          </div>

          <div className="md:max-w-[250px] rounded-md  relative">
            <Image src={Fruit3} alt="List" className="w-full rounded-t-md" />
            <div className="bg-[#C82C2F] w-full h-1"></div>
            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <h4 className="text-[15px] font-medium text-center">Livestock</h4>
              <p className="text-[8px] font-light">
                High-quality food crops ranging from: Cereals (e.g., rice,
                wheat, maize, sorghum, ragi) Pulses (e.g., lentils, chickpeas,
                beans) Fruits (e.g., apples, oranges, bananas) Vegetables (e.g.,
                tomatoes, carrots, lettuce) Nuts (e.g., almonds, walnuts,
                cashews)
              </p>
              <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-[7px]  max-w-[180px]">
                <Link href="https://wa.me/+2348035491849">Contact Us</Link>
              </button>
            </div>
          </div>

          <div className="md:max-w-[250px] rounded-md  relative">
            <Image src={Fruit4} alt="List" className="w-full rounded-t-md" />
            <div className="bg-[#C82C2F] w-full h-1"></div>
            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <h4 className="text-[15px] font-medium text-center">
                Food Crops
              </h4>
              <p className="text-[8px] font-light">
                High-quality food crops ranging from: Cereals (e.g., rice,
                wheat, maize, sorghum, ragi) Pulses (e.g., lentils, chickpeas,
                beans) Fruits (e.g., apples, oranges, bananas) Vegetables (e.g.,
                tomatoes, carrots, lettuce) Nuts (e.g., almonds, walnuts,
                cashews)
              </p>
              <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-[7px]  max-w-[180px]">
                <Link href="https://wa.me/+2348035491849">Contact Us</Link>
              </button>
            </div>
          </div>
          <div className="md:max-w-[250px] rounded-md  relative">
            <Image src={Fruit1} alt="List" className="w-full rounded-t-md" />
            <div className="bg-[#C82C2F] w-full h-1"></div>
            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <h4 className="text-[15px] font-medium text-center">
                Food Crops
              </h4>
              <p className="text-[8px] font-light">
                High-quality food crops ranging from: Cereals (e.g., rice,
                wheat, maize, sorghum, ragi) Pulses (e.g., lentils, chickpeas,
                beans) Fruits (e.g., apples, oranges, bananas) Vegetables (e.g.,
                tomatoes, carrots, lettuce) Nuts (e.g., almonds, walnuts,
                cashews)
              </p>
              <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-[7px]  max-w-[180px]">
                <Link href="https://wa.me/+2348035491849">Contact Us</Link>
              </button>
            </div>
          </div>
          <div className="md:max-w-[250px] rounded-md  relative">
            <Image src={Fruit1} alt="List" className="w-full rounded-t-md" />
            <div className="bg-[#C82C2F] w-full h-1"></div>
            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <h4 className="text-[15px] font-medium text-center">
                Food Crops
              </h4>
              <p className="text-[8px] font-light">
                High-quality food crops ranging from: Cereals (e.g., rice,
                wheat, maize, sorghum, ragi) Pulses (e.g., lentils, chickpeas,
                beans) Fruits (e.g., apples, oranges, bananas) Vegetables (e.g.,
                tomatoes, carrots, lettuce) Nuts (e.g., almonds, walnuts,
                cashews)
              </p>
              <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-[7px]  max-w-[180px]">
                <Link href="https://wa.me/+2348035491849">Contact Us</Link>
              </button>
            </div>
          </div>

          <div className="md:max-w-[250px] rounded-md  relative">
            <Image src={Fruit1} alt="List" className="w-full rounded-t-md" />
            <div className="bg-[#C82C2F] w-full h-1"></div>
            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <h4 className="text-[15px] font-medium text-center">
                Food Crops
              </h4>
              <p className="text-[8px] font-light">
                High-quality food crops ranging from: Cereals (e.g., rice,
                wheat, maize, sorghum, ragi) Pulses (e.g., lentils, chickpeas,
                beans) Fruits (e.g., apples, oranges, bananas) Vegetables (e.g.,
                tomatoes, carrots, lettuce) Nuts (e.g., almonds, walnuts,
                cashews)
              </p>
              <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-[7px]  max-w-[180px]">
                <Link href="https://wa.me/+2348035491849">Contact Us</Link>
              </button>
            </div>
          </div>

          <div className="md:max-w-[250px] rounded-md  relative">
            <Image src={Fruit1} alt="List" className="w-full rounded-t-md" />
            <div className="bg-[#C82C2F] w-full h-1"></div>
            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <h4 className="text-[15px] font-medium text-center">
                Food Crops
              </h4>
              <p className="text-[8px] font-light">
                High-quality food crops ranging from: Cereals (e.g., rice,
                wheat, maize, sorghum, ragi) Pulses (e.g., lentils, chickpeas,
                beans) Fruits (e.g., apples, oranges, bananas) Vegetables (e.g.,
                tomatoes, carrots, lettuce) Nuts (e.g., almonds, walnuts,
                cashews)
              </p>
              <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-[7px]  max-w-[180px]">
                <Link href="https://wa.me/+2348035491849">Contact Us</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex  justify-center w-full mt-4 py-6">
          <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2 font-bold rounded-sm text-white font-Montserrat text-[7px] max-w-[180px] ">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
