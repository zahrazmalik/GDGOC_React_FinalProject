import React from "react";
import heroImage from "../assets/image-hero-desktop.png";
import Footer from "./Footer";

const MidSection = () => {
  return (
    <section className="relative px-6 py-8">
      {/* MidSection Content */}
      <div className="flex flex-col-reverse md:flex-row items-center md:ml-24">
        {/* MidSection Text */}
        <div className="text-center md:text-left max-w-lg">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="md:block">Make </span>
            <span className="md:block">remote work</span>
          </h1>
          <p className="md:mt-8 mt-4 text-gray-600">
            Get your team in sync, no matter your location. Streamline processes,
            create team rituals, and watch productivity soar.
          </p>
          <button className="md:mt-16 mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-mediumGray hover:text-white focus:outline-none focus:ring-2 focus:ring-black transition">
            Learn more
          </button>
        </div>

        {/* MidSection Image */}
        <div className="relative w-full md:w-1/2">
          <img src={heroImage} alt="Hero" className="w-full" />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12">
        {/* Desktop Footer */}
        <Footer className="absolute left-10 bottom-20 mt-6 md:mt-0 hidden md:flex justify-start space-x-8 md:ml-6" />
        {/* Mobile Footer */}
        <Footer className="absolute left-10 flex md:hidden justify-center space-x-2 w-full max-w-xs " />
      </div>
    </section>
  );
};

export default MidSection;