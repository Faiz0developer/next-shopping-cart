import React from "react";
import HeroData from "./hero/hero";
import Slider from "./slider";

const HomeMain = ({ result }) => {
  return (
    <div>
      <Slider />
      <HeroData products={result} />
    </div>
  );
};

export default HomeMain;
