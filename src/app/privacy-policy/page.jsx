"use client";
import React, { useEffect, useState } from "react";
import Loader from "../api/Loader";
import Navbar from "../components/Navbar";

const PrivacyPolicy = () => {
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
                  "linear-gradient(99deg, rgba(115, 173, 254, 0.48) 43.16%, rgba(82, 110, 150, 0.00) 76.84%) lightgray",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
              }}
            >
              <div className="container mx-auto  md:px-32 px-10">
                <div className="flex flex-col  items-center gap-3">
                  <h1 className="text-[#323131] font-bold md:text-6xl text-3xl">
                    Privacy Policy
                  </h1>
                  <p>Last Updated: July 28, 2023</p>
                </div>
              </div>
            </div>
            <div className="container font-Montserrat mx-auto px-10 py-20">
              <h1 className="text-2xl font-bold">Privacy Policy</h1>
              <p>
                This privacy policy ({'"policy"'}) will help you understand how
                Assuch Global ({'"us"'}, {'"we"'}, {'"our"'}) uses and protects
                the data you provide to us when you visit and use our website (
                {'"website"'}, {'"service"'}).
              </p>
              <p>
                We reserve the right to change this policy at any given time, of
                which you will be promptly updated. If you want to make sure
                that you are up to date with the latest changes, we advise you
                to frequently visit this page.
              </p>
              <h2 className="text-xl font-bold mt-3 mb-2">
                What User Data We Collect
              </h2>
              <p>
                We may collect the following information:
                <ul>
                  <li>Name</li>
                  <li>
                    Contact information including email address and phone number
                  </li>
                  <li>
                    Demographic information such as postcode, preferences, and
                    interests
                  </li>
                  <li>
                    Other information relevant to customer surveys and/or offers
                  </li>
                </ul>
              </p>
              <h2 className="text-xl font-bold mt-3 mb-2">
                Why We Collect Your Data
              </h2>
              <p className="text-base font-medium">
                We are collecting your data for several reasons:
              </p>
              <ul>
                <li>
                  To better understand your needs and provide you with the
                  services you have requested
                </li>
                <li>To improve our products and services</li>
                <li>
                  To send promotional emails about new products, special offers,
                  or other information which we think you may find interesting
                  using the email address which you have provided
                </li>
                <li>
                  From time to time, we may also use your information to contact
                  you for market research purposes. We may contact you by email,
                  phone, or mail. We may use the information to customize the
                  website according to your interests
                </li>
              </ul>
              <h2 className="text-xl font-bold mt-3 mb-2">
                How We Use Your Data
              </h2>
              <p className="text-base font-medium">
                We use the information we collect in various ways, including to:
              </p>
              <ul>
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>
                  Develop new products, services, features, and functionality
                </li>
                <li>
                  Communicate with you, either directly or through one of our
                  partners, including for customer service, to provide you with
                  updates and other information relating to the website, and for
                  marketing and promotional purposes
                </li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
              </ul>
              <h2 className="text-xl font-bold mt-3 mb-2">
                Retention of Your Data
              </h2>
              <p>
                We will retain your personal data only for as long as is
                necessary for the purposes set out in this privacy policy.
              </p>
              <h2 className="text-xl font-bold mt-3 mb-2">
                Children{"'"}s Privacy
              </h2>
              <p>
                Our website does not address anyone under the age of 18 (
                {'"Children"'}
                ).
              </p>
              <h2 className="text-xl font-bold mt-3 mb-2">
                Links to Other Websites
              </h2>
              <p>
                Our website may contain links to other websites that are not
                operated by us. If you click a third-party link, you will be
                directed to that third party{"'"}s site. We strongly advise you
                to review the privacy policy of every site you visit.
              </p>
              <h2 className="text-xl font-bold mt-3 mb-2">
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update our privacy policy from time to time. We will
                notify you of any changes by posting the new privacy policy on
                this page.
              </p>
              <h2 className="text-xl font-bold mt-3 mb-2">Contact Us</h2>
              <p>
                If you have any questions about our privacy policy, please
                contact us at{" "}
                <a
                  className="underline text-red-600"
                  href="mailto:info@assuchglobal.com"
                >
                  info@assuchglobal.com
                </a>
                .
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PrivacyPolicy;
