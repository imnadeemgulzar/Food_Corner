import Image from "next/image";
import React from "react";
import TopText from "./TopText";

const TopMenu = () => {
  const topMenus = [
    {
      id: 1,
      title: "Burger",
      price: 8.99,
      src: "/burger-4.jpg",
      description:
        "A classic burger experience - juicy grilled patty, fresh lettuce, ripe tomatoes, and savory condiments in a perfect harmony of flavors.",
    },
    {
      id: 2,
      title: "Ice-Cream",
      price: 4.5,
      src: "/ice-cream.jpg",
      description:
        "Indulge in creamy bliss with our delightful ice cream. Choose from a variety of flavors, from classic vanilla to exotic combinations.",
    },
    {
      id: 3,
      title: "Pizza",
      price: 12.99,
      src: "/pizza.jpg",
      description:
        "Explore the world of pizza perfection! Our oven-baked creations feature a medley of fresh ingredients, gooey cheese, and a crispy crust.",
    },
  ];
  return (
    <div className="my-8">
      <TopText title="Our Top Menu" />
      <div className="flex items-center justify-between gap-6">
        {topMenus.map((menuItem) => (
          <div key={menuItem.id} className="flex flex-col items-center">
            <div className="h-[400px]">
              <Image
                src={menuItem.src}
                height={100}
                width={300}
                className="text-center rounded-sm"
              />
            </div>
            <div className=" text-slate-700 ">
              <h3 className="text-[#317875f8] font-medium text-lg mt-2">
                {menuItem.title}
              </h3>
              <p className=" font-medium my-2">{menuItem.description}</p>
              <h2 className="font-bold">{`$${menuItem.price}`}</h2>
              <button className="text-slate-200 bg-[#317875f8] px-4 py-1 rounded-md mt-2">
                See More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopMenu;
