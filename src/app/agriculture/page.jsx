"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Agent from "../components/Agent";
import Loader from "../api/Loader";
import Success from "../components/Success";
import OurOffer from "../components/OurOffer";
const Agriculture = () => {
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
                  "linear-gradient(99deg, rgba(115, 173, 254, 0.48) 43.16%, rgba(82, 110, 150, 0.00) 76.84%), url('/Agriculture.svg') lightgray",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
              }}
            >
              <div className="container mx-auto md:px-10 px-10">
                <div className="flex flex-col md:items-start items-center gap-3">
                  <h2 className="font-normal text-2xl mb-4">Unleashing</h2>
                  <h2 className="text-3xl max-w-[220px]  md:text-start text-center font-semibold">
                    THE POWER OF AGRICULTURE
                  </h2>
                  <button className="bg-[#C82C2F] px-10 py-3  font-medium rounded-md text-white font-Montserrat text-base  max-w-[250px]">
                    Browse Listings
                  </button>
                </div>
              </div>
            </div>
          </div>

          <OurOffer />
          <Success />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Agriculture;
