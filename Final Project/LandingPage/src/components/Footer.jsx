import React from "react";
import databiz from "../assets/client-databiz.svg";
import audiophile from "../assets/client-audiophile.svg";
import meet from "../assets/client-meet.svg";
import maker from "../assets/client-maker.svg";

const Footer = ({ className }) => {
  return (
    <section className={`flex justify-start space-x-8 ${className} `}>
      <img src={databiz} alt="Databiz" className="w-16 h-auto object-contain" />
      <img src={audiophile} alt="Audiophile" className="w-16 h-auto object-contain" />
      <img src={meet} alt="Meet" className="w-16 h-auto object-contain" />
      <img src={maker} alt="Maker" className="w-16 h-auto object-contain" />
    </section>
  );
};

export default Footer;