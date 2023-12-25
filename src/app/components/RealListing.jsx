import Image from "next/image";
import React from "react";
import List1 from "../../../public/list1.svg";
import List2 from "../../../public/list2.svg";
import List3 from "../../../public/list3.svg";
import List4 from "../../../public/list4.svg";
import List5 from "../../../public/list5.svg";
import List6 from "../../../public/list6.svg";
import List7 from "../../../public/list7.svg";
import List8 from "../../../public/list8.svg";
import Link from "next/link";

const RealListing = () => {
  return (
    <div className="bg-[#DBF0F8]  h-full w-full">
      <div className="container mx-auto w-full  py-20 md:px-10 px-10">
        <div className="flex flex-col items-center gap-4">
          <h1 className="md:text-3xl text-xl font-medium ">Recent Listings</h1>
          <p className="md:text-base max-w-md text-xs font-light text-center">
            Check out our recent listings and make a choice of a lifetime. Be
            the first to choose.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-20 mx-auto">
          <div className="md:max-w-[200px]  relative">
            <Image src={List1} alt="List" className="w-full" />

            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <button className="bg-[#00ADEF]  px-6 py-1 font-bold rounded-md text-white font-Montserrat text-[7px] max-w-[180px] absolute  top-[1%]  -translate-y-1/2 left-1/2 transform -translate-x-1/2">
                View Listing
              </button>
              <h4 className="text-[10px] font-medium">Lekki Phase 1, Lagos</h4>
              <h5 className="text-[10px] font-bold">N50,000,000</h5>
              <p className="text-[10px] font-medium">648sqm /3 Bed/3 Bath</p>
              <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-[7px]  max-w-[180px]">
                <Link href="https://wa.me/+2348035491849">Contact Agent</Link>
              </button>
            </div>
          </div>

          <div className="md:max-w-[200px]  relative">
            <Image src={List2} alt="List" className="w-full" />

            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <button className="bg-[#00ADEF]  px-6 py-1 font-bold rounded-md text-white font-Montserrat text-[7px] max-w-[180px] absolute  top-[1%]  -translate-y-1/2 left-1/2 transform -translate-x-1/2">
                View Listing
              </button>
              <h4 className="text-[10px] font-medium">Lekki Phase 1, Lagos</h4>
              <h5 className="text-[10px] font-bold">N50,000,000</h5>
              <p className="text-[10px] font-medium">648sqm /3 Bed/3 Bath</p>
              <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-[7px]  max-w-[180px]">
                <Link href="https://wa.me/+2348035491849">Contact Agent</Link>
              </button>
            </div>
          </div>

          <div className="md:max-w-[200px]  relative">
            <Image src={List3} alt="List" className="w-full" />

            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <button className="bg-[#00ADEF]  px-6 py-1 font-bold rounded-md text-white font-Montserrat text-[7px] max-w-[180px] absolute  top-[1%]  -translate-y-1/2 left-1/2 transform -translate-x-1/2">
                View Listing
              </button>
              <h4 className="text-[10px] font-medium">Lekki Phase 1, Lagos</h4>
              <h5 className="text-[10px] font-bold">N50,000,000</h5>
              <p className="text-[10px] font-medium">648sqm /3 Bed/3 Bath</p>
              <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-[7px]  max-w-[180px]">
                <Link href="https://wa.me/+2348035491849">Contact Agent</Link>
              </button>
            </div>
          </div>

          <div className="md:max-w-[200px]  relative">
            <Image src={List4} alt="List" className="w-full" />

            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <button className="bg-[#00ADEF]  px-6 py-1 font-bold rounded-md text-white font-Montserrat text-[7px] max-w-[180px] absolute  top-[1%]  -translate-y-1/2 left-1/2 transform -translate-x-1/2">
                View Listing
              </button>
              <h4 className="text-[10px] font-medium">Lekki Phase 1, Lagos</h4>
              <h5 className="text-[10px] font-bold">N50,000,000</h5>
              <p className="text-[10px] font-medium">648sqm /3 Bed/3 Bath</p>
              <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-[7px]  max-w-[180px]">
                <Link href="https://wa.me/+2348035491849">Contact Agent</Link>
              </button>
            </div>
          </div>

          <div className="md:max-w-[200px]  relative">
            <Image src={List5} alt="List" className="w-full" />

            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <button className="bg-[#00ADEF]  px-6 py-1 font-bold rounded-md text-white font-Montserrat text-[7px] max-w-[180px] absolute  top-[1%]  -translate-y-1/2 left-1/2 transform -translate-x-1/2">
                View Listing
              </button>
              <h4 className="text-[10px] font-medium">Lekki Phase 1, Lagos</h4>
              <h5 className="text-[10px] font-bold">N50,000,000</h5>
              <p className="text-[10px] font-medium">648sqm /3 Bed/3 Bath</p>
              <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-[7px]  max-w-[180px]">
                <Link href="https://wa.me/+2348035491849">Contact Agent</Link>
              </button>
            </div>
          </div>

          <div className="md:max-w-[200px]  relative">
            <Image src={List6} alt="List" className="w-full" />

            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <button className="bg-[#00ADEF]  px-6 py-1 font-bold rounded-md text-white font-Montserrat text-[7px] max-w-[180px] absolute  top-[1%]  -translate-y-1/2 left-1/2 transform -translate-x-1/2">
                View Listing
              </button>
              <h4 className="text-[10px] font-medium">Lekki Phase 1, Lagos</h4>
              <h5 className="text-[10px] font-bold">N50,000,000</h5>
              <p className="text-[10px] font-medium">648sqm /3 Bed/3 Bath</p>
              <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-[7px]  max-w-[180px]">
                <Link href="https://wa.me/+2348035491849">Contact Agent</Link>
              </button>
            </div>
          </div>

          <div className="md:max-w-[200px]  relative">
            <Image src={List7} alt="List" className="w-full" />

            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <button className="bg-[#00ADEF]  px-6 py-1 font-bold rounded-md text-white font-Montserrat text-[7px] max-w-[180px] absolute  top-[1%]  -translate-y-1/2 left-1/2 transform -translate-x-1/2">
                View Listing
              </button>
              <h4 className="text-[10px] font-medium">Lekki Phase 1, Lagos</h4>
              <h5 className="text-[10px] font-bold">N50,000,000</h5>
              <p className="text-[10px] font-medium">648sqm /3 Bed/3 Bath</p>
              <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-[7px]  max-w-[180px]">
                <Link href="https://wa.me/+2348035491849">Contact Agent</Link>
              </button>
            </div>
          </div>

          <div className="md:max-w-[200px]  relative">
            <Image src={List8} alt="List" className="w-full" />

            <div className="bg-white rounded-b-md shadow-lg shadow-[#ccc] py-4 px-4 flex flex-col items-center gap-5 relative">
              <button className="bg-[#00ADEF]  px-6 py-1 font-bold rounded-md text-white font-Montserrat text-[7px] max-w-[180px] absolute  top-[1%]  -translate-y-1/2 left-1/2 transform -translate-x-1/2">
                View Listing
              </button>
              <h4 className="text-[10px] font-medium">Lekki Phase 1, Lagos</h4>
              <h5 className="text-[10px] font-bold">N50,000,000</h5>
              <p className="text-[10px] font-medium">648sqm /3 Bed/3 Bath</p>
              <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2  font-bold rounded-full text-white font-Montserrat text-[7px]  max-w-[180px]">
                <Link href="https://wa.me/+2348035491849">Contact Agent</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex  justify-center w-full mt-4 py-6">
          <button className="bg-[#C82C2F] hover:bg-[#ee5457] px-6 py-2 font-bold rounded-sm text-white font-Montserrat text-[7px] max-w-[180px] ">
            View All Listings
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealListing;
