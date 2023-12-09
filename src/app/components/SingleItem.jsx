"use client";
import { cartContext } from "@/context";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const SingleItem = ({ menuItem }) => {
  const { AddToCart } = useContext(cartContext);
  return (
    <div
      key={menuItem.id}
      className="flex justify-between items-center border-t-[1px] py-4 border-slate-800"
    >
      <div className=" text-slate-700 w-1/2 flex flex-col gap-2">
        <h3 className="text-[#317875f8] font-medium text-2xl mt-2">
          {menuItem.title}
        </h3>
        <p className=" font-medium my-2 text-lg">{menuItem.description}</p>
        <h2 className="font-bold text-2xl">{`$${menuItem.price}`}</h2>
        <Link href="/cart">
          <button
            onClick={() => AddToCart(menuItem)}
            className="text-slate-200 bg-[#317875f8] px-4 py-1 rounded-md mt-2"
          >
            Add To Cart
          </button>
        </Link>
      </div>
      <div className="h-[270px] w-[400px] relative mb-4">
        <Image
          src={menuItem.src}
          layout="fill"
          className=" rounded-lg object-fit"
          alt="image"
        />
      </div>
    </div>
  );
};

export default SingleItem;
