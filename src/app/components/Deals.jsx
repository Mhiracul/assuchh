"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion"; // If this line is causing the issue
import { staggerContainer, fadeIn } from "../api/Motion";
import { deals } from "../api/Data";
import { Button } from "react-scroll";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

function Deals() {
  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="text-black absolute top-1/3 right-0 transform -translate-y-1/2 bg-white rounded-full p-2"
    >
      <FaArrowRight />
    </button>
  );

  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="text-black absolute top-1/3 -left-6 transform -translate-y-1/2 bg-white rounded-full p-2 z-[99999]"
    >
      <FaArrowLeft />
    </button>
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5.2, // Number of deals to show at once
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />, // Add custom next arrow component
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="p-[6%]  mt-[5%] md:mt-[-10%]">
      <h2 className="font-montserrat text-black text-[30px] font-bold">
        Latest Deals
      </h2>
      <Slider {...sliderSettings} className="flex gap-10">
        {deals.map((deal, index) => (
          <div key={index} className="mr-3">
            <Image
              src={deal.img}
              alt={deal.title}
              className="w-[98%] h-[178px] object-cover"
            />
            <div className="p-5 w-[98%] shadow-lg">
              <h3 className="font-Monserrat font-bold underline">
                {deal.title}
              </h3>
              <p className="text-black text-[8px]">{deal.content}</p>
              <div className="flex flex-row justify-end">
                <Button className="bg-[#00ADEF] justify-end rounded-sm px-4 py-1 text-white text-[12px]">
                  See all
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Deals;
