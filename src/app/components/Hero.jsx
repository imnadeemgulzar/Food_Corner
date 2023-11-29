import Image from "next/image";
import React from "react";
const Hero = () => {
  return (
    <div className="flex my-8 rounded-md p-8 bg-[#020202]">
      <div className="w-3/4 px-4">
        <h2 className="mb-6 text-5xl font-semibold font-sans text-white">
          Taste the Extraordinary at <br />
          <span className="text-[#e4cba4]">Food Corner</span>
        </h2>
        <p className="font-medium w-3/4 text-lg leading-9 text-[#317875f8]">
          Welcome to Food Corner, where culinary excellence meets delightful
          experiences. Immerse yourself in a world of flavors crafted to
          perfection. From mouthwatering dishes to decadent desserts, our
          curated menu caters to every palate. Explore a gastronomic journey
          that transcends ordinary dining, as we blend innovation with
          tradition. Join us in celebrating the art of food – where every bite
          tells a story. Your culinary adventure starts here at Food Corner,
          where taste knows no bounds."
        </p>
      </div>
      <div>
        <Image src="/burger.jpg" width={500} height={500} className="" />
      </div>
    </div>
  );
};

export default Hero;
