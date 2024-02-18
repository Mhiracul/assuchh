"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BusinessService from "../components/BusinessService";
import Loader from "../api/Loader";

const Business = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(delay);
  }, []);
  return (
    <div>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="">
            <div
              className="relative bg-cover bg-center h-[60vh] flex items-center w-full"
              style={{
                background:
                  "linear-gradient(99deg, rgba(115, 173, 254, 0.48) 43.16%, rgba(82, 110, 150, 0.00) 76.84%), url('/business1.svg') lightgray",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
              }}
            >
              <div className="container mx-auto md:px-10 px-10">
                <div className="flex flex-col items-start gap-3">
                  <h2 className="lg:text-3xl  md:text-2xl text-xl     font-semibold">
                    Business Deals <br /> That Empowers Dreams
                  </h2>
                  <button className="bg-[#C82C2F] mt-6 px-6 py-2  font-medium rounded-sm text-white font-Montserrat text-base  max-w-[250px]">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <BusinessService />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Business;
