"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Deals from "./components/Deals";
import AboutUs from "./components/AboutUs";
import WhyUs from "./components/WhyUs";
import Testimonial from "./components/Testimonial";
import InfoSearch from "./components/InfoSearch";
import Steps from "./components/Steps";
import Loader from "./api/Loader";

export default function Home() {
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
          <Hero />
          <InfoSearch />
          <Deals />
          <WhyUs />
          <Steps />
          <Testimonial />
          <AboutUs />
          <Footer />
        </>
      )}
    </div>
  );
}
