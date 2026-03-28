import React from "react";
import HeroText from "./HeroText";
import HeroSubject from "./HeroSubject";

const Hero = () => {
  return (
    <div className="px-5 py-8  md:p-15 md:grid grid-cols-2 gap-10 items-start">
      <HeroText />
      <HeroSubject />
    </div>
  );
};

export default Hero;
