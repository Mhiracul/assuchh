"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = "http://localhost:3001/submit-form";
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Handle the response as needed
      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="font-Montserrat">
      <Navbar />
      <div
        style={{
          background:
            "linear-gradient(99deg, rgba(115, 173, 254, 0.48) 43.16%, rgba(82, 110, 150, 0.00) 76.84%), url('/contact1.svg') lightgray",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "60vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container mx-auto  md:px-32 px-10">
          <div className="flex flex-col  items-center gap-3">
            <h1 className="text-white font-bold md:text-6xl text-3xl">
              Contact Us
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#f6f6f6]">
        <div className="py-20 container shadow-md mx-auto font-Montserrat bg-white md:px-20 px-10 flex flex-col items-center">
          <div className="   w-full font-urbanist text-black py-10">
            <h5 className="font-medium text-[#00ADEF] text-center mb-3">
              REQUEST A QUOTE
            </h5>
            <h1 className="text-black md:text-3xl text-xl mb-4 font-bold text-center">
              How May We Help You!
            </h1>

            <div className=" w-full flex flex-col items-center">
              <form className="p-6 w-full" onSubmit={handleSubmit}>
                <div className="flex md:flex-row w-full flex-col md:gap-4 gap-2">
                  <div className="mb-4 w-full">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full  border bg-transparent border-[#ebebeb] focus:ring-2 outline-none focus:ring-blue-500 focus:border-transparent "
                      placeholder="Your Name*"
                    />
                  </div>

                  <div className="mb-4 w-full">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full   border bg-transparent border-[#ebebeb] focus:ring-2 outline-none focus:ring-blue-500 focus:border-transparent "
                      placeholder="Your Email*"
                    />
                  </div>
                </div>

                <div className="mb-4 w-full">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full   border bg-transparent border-[#ebebeb] focus:ring-2 outline-none focus:ring-blue-500 focus:border-transparent "
                    placeholder="Subject*"
                  />
                </div>

                <div className="mb-4 w-full">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-1 p-2 w-full border border-[#ebebeb] bg-transparent  focus:ring-2 outline-none focus:ring-blue-500 focus:border-transparent "
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#00ADEF] text-white px-4 py-2 w-full rounded-md hover:bg-[#449fc2] transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
