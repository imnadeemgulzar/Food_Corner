import React from "react";
import TopText from "./TopText";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="my-8">
      <TopText title="About Us" />
      <div className="flex items-start justify-between gap-4">
        <Image
          src="/aboutUs.jpg"
          height={600}
          width={600}
          className="rounded-md"
        />

        <div className="px-4 text-slate-700 font-medium leading-8">
          <p className="mb-2">
            <span className="text-lg text-[#317875f8]">
              Welcome to Food Corner
            </span>{" "}
            , where culinary delights meet comfort in every bite. We are more
            than just a food corner; we are a celebration of flavors, a haven
            for food enthusiasts seeking a symphony of taste.
          </p>
          <p className="mb-2">
            At Food Corner, we believe in the magic that happens when good food
            brings people together. Whether you're craving the cheesy goodness
            of our handcrafted pizzas, the sizzling satisfaction of our burgers,
            or the sweet indulgence of our velvety ice creams, we have something
            to satisfy every palate.
          </p>
          <p className="mb-2">
            Thank you for choosing Food Corner as your go-to destination for a
            food experience that goes beyond the ordinary. Join us in this
            gastronomic journey, and let's create memories one delicious dish at
            a time.
          </p>
          <p className="text-[#317875f8]">
            Indulge. Enjoy. Experience the extraordinary at Food Corner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
