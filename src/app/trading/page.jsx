"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Agent from "../components/Agent";
import Loader from "../api/Loader";
import OurSolution from "../components/OurSolution";
import ImportExport from "../components/ImportExport";
const Trading = () => {
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
                  "linear-gradient(99deg, rgba(115, 173, 254, 0.48) 43.16%, rgba(82, 110, 150, 0.00) 76.84%), url('/trading.svg') lightgray",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
              }}
            >
              <div className="container mx-auto md:px-10 px-10">
                <div className="flex flex-col items-center gap-3">
                  <h2 className="lg:text-3xl  md:text-2xl text-xl    text-center font-semibold">
                    Connect Your Business to a <br /> World of Possibilities
                  </h2>
                  <button className="bg-[#C82C2F] px-6 py-2  font-medium rounded-sm text-white font-Montserrat text-base  max-w-[250px]">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          <ImportExport />
          <OurSolution />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Trading;
