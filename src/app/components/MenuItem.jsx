"use client";
import { cartContext } from "@/context";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const MenuItem = ({ menuItem }) => {
  const { AddToCart } = useContext(cartContext);
  return (
    <div key={menuItem.id} className="">
      <div className="h-[350px] w-[390px] relative mb-4">
        <Image
          src={menuItem.src}
          layout="fill"
          className=" rounded-lg object-fit"
          alt="image"
        />

        <div className=" text-slate-700 flex flex-col justify-between gap-2 absolute w-full h-full">
          <h3
            className="text-white font-medium bg-[#2D5E2E] rounded-sm text-2xl py-1 w-[90%] mx-auto text-center"
            style={{
              transform: "skew(-20deg)",
            }}
          >
            {menuItem.title}
          </h3>
          <div
            className="flex justify-between items-center px-4 py-2 w-full mx-auto text-lg rounded-md"
            style={{
              transform: "skew(-20deg)",
            }}
          >
            <h2 className="text-slate-200 bg-[#2D5E2E] px-4 py-1 rounded-md w-[100px] text-center font-semibold">{`$${menuItem.price}`}</h2>
            <Link href="/cart">
              <button
                onClick={() => AddToCart(menuItem)}
                className="text-slate-200 bg-[#2D5E2E] px-4 py-1 rounded-md font-semibold"
              >
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
