"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RealListing from "../components/RealListing";
import Agent from "../components/Agent";
import Loader from "../api/Loader";
const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (you can replace this with actual data fetching logic)
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2800);

    // Clear the timeout on component unmount to avoid memory leaks
    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        // Render loader while content is loading
        <Loader />
      ) : (
        // Render the actual content when loading is complete
        <>
          <div className="">
            <div
              className="relative bg-cover bg-center h-[60vh] flex items-center w-full"
              style={{
                background:
                  "linear-gradient(99deg, rgba(115, 173, 254, 0.48) 43.16%, rgba(82, 110, 150, 0.00) 76.84%), url('/RealEstates.png') lightgray",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
              }}
            >
              <div className="container mx-auto md:px-32 px-10">
                <div className="flex flex-col md:items-start items-center gap-3">
                  <h2 className="font-normal text-3xl ">Find & Build</h2>
                  <h2 className="text-3xl md:text-start text-center font-semibold">
                    YOUR DREAM HOME
                  </h2>
                  <button className="bg-[#C82C2F] px-10 py-3  font-medium rounded-md text-white font-Montserrat text-base  max-w-[250px]">
                    Browse Listings
                  </button>
                </div>
              </div>
            </div>
          </div>
          <RealListing />
          <Agent />
          <Footer />
        </>
      )}
    </div>
  );
};

export default About;
