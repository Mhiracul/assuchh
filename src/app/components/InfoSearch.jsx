"use client";
import Link from "next/link";
import React from "react";
import { Button } from "react-scroll";
import { FiSearch } from "react-icons/fi";

function InfoSearch() {
  return (
    <div
      className="relative bg-cover bg-center h-[50vh] md:h-[80vh] items-center w-full md:mt-[-150px] mt-[0px] hidden md:flex"
      style={{
        background: "url('/curve.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        padding: "0% 6%",
        width: "100%",
      }}
    >
      <div className="flex flex-row gap-2 lg:text-sm md:text-xs justify-between content-center align-middle w-full items-center mx-auto bg-white shadow-lg p-6 ">
        <Link
          href="/real-estate"
          className="border-[#00000066] border-r-2 px-4"
        >
          Real Estate
        </Link>
        <Link
          href="/agriculture"
          className="border-[#00000066] border-r-2 px-4"
        >
          Agriculture
        </Link>
        <Link href="/trading" className="border-[#00000066] border-r-2 px-4">
          Trading
        </Link>
        <Link href="/trading" className="border-[#00000066] border-r-2 px-4">
          Import
        </Link>
        <Link href="/trading" className="border-[#00000066] border-r-2 px-4">
          Export
        </Link>
        <Link href="/business" className="border-[#00000066] border-r-2 px-4">
          Business
        </Link>

        <Button className="bg-[#C82C2F] p-2">
          <FiSearch color="#fff" size={20} />
        </Button>
      </div>
    </div>
  );
}

export default InfoSearch;
