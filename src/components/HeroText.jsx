import React from "react";

const HeroText = () => {
  return (
    <div>
      <h1 className="text-(--primaryColor) font-thin text-[2.5rem] leading-[100%] md:text-[80px]">
        Welcome to the <br />
        <span className="font-bold">Frontend Quiz!</span>
      </h1>
      <p
        className="text-[var(--secondaryColor)] 
      py-6
      md:pt-8  text-[1.4rem] leading-[150%] md:text-[25px]   italic"
      >
        Pick a subject to get started.
      </p>
    </div>
  );
};

export default HeroText;
