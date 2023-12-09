"use client";
import { cartContext } from "@/context";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
const MyCart = () => {
  const { cart, RemoveFromCart } = useContext(cartContext);
  const [itemQuantities, setItemQuantities] = useState({});
  const handleQuantityChange = (itemId, newQuantity) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };

  const calculateSubTotal = () => {
    let Subtotal = 0;

    cart.forEach((item) => {
      const itemId = item.id;
      const quantity = itemQuantities[itemId] || 1;
      Subtotal += item.price * quantity;
    });
    return parseFloat(Subtotal.toFixed(2));
  };
  const calculateShippingCharge = () => {
    let ShippingCharge = 0;
    cart.forEach((item) => {
      const itemId = item.id;
      const quantity = itemQuantities[itemId] || 1;
      ShippingCharge += 0.5 * quantity;
    });
    return parseFloat(ShippingCharge.toFixed(2));
  };
  const calculateTax = () => {
    let taxCharge = 0;
    const subtotal = parseFloat(calculateSubTotal());
    taxCharge = 0.04 * subtotal;
    return parseFloat(taxCharge.toFixed(2));
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubTotal());
    const taxCharge = parseFloat(calculateTax());
    const shippingCharge = parseFloat(calculateShippingCharge());

    return parseFloat((subtotal + taxCharge + shippingCharge).toFixed(2));
  };

  const headerTextStyle = {
    backgroundImage: " linear-gradient(#2D5E2E,#98BC62)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "currentColor",
    transform: "skew(-20deg)",
  };
  return (
    <div>
      <h1
        style={headerTextStyle}
        className=" text-5xl text-transparent font-bold w-[70%] leading-[60px] my-8 text-center"
      >
        My cart
      </h1>
      <div className="flex gap-6">
        <div className="w-[70%] ">
          {cart?.length > 0 ? (
            cart.map((item) => {
              const itemId = item.id;
              const quantity = itemQuantities[itemId] || 1;

              return (
                <div className="flex items-center" key={itemId}>
                  <div className="flex my-5 items-center border-t-2 shadow-slate-400 shadow-md rounded-2xl justify-around border-3 bg-slate-50 p-4">
                    <div className="h-[130px] w-[130px] relative">
                      <Image
                        src={item.src}
                        layout="fill"
                        className=" rounded-lg object-fit"
                        alt="image"
                      />
                    </div>
                    <div className=" text-slate-700 w-1/2 flex flex-col gap-2">
                      <h3 className="text-[#2D5E2E] font-medium text-2xl mt-2">
                        {item.title}
                      </h3>
                      <p className=" font-medium my-2 text-lg">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex text-[#2D5E2E] w-1/3 p-1 font-medium border-2 rounded-md border-[#2D5E2E]">
                          <p>Quantity:</p>
                          <select
                            className="w-full mx-1 border-none outline-none"
                            value={quantity}
                            onChange={(e) =>
                              handleQuantityChange(itemId, e.target.value)
                            }
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                          </select>
                        </div>
                        <button
                          onClick={() => {
                            RemoveFromCart(item);
                          }}
                          className="bg-[#2D5E2E] px-6 py-1 rounded-md text-white"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <h2 className="font-bold text-3xl text-[#2D5E2E]">{`$${
                      item.price * quantity
                    }`}</h2>
                  </div>
                </div>
              );
            })
          ) : (
            <h2>No items in the cart</h2>
          )}
        </div>
        <div className="w-[30%] sticky top-0 h-[65vh]">
          <div className=" shadow-slate-400 my-5 shadow-md rounded-2xl p-3 border-t-2">
            <h1
              style={headerTextStyle}
              className="text-5xl text-transparent font-bold leading-[60px] text-center mb-6"
            >
              Summary
            </h1>
            <div className="text-[#2D5E2E] flex items-center justify-between mx-6 my-3">
              <p className=" font-semibold">Subtotal</p>
              <span className="text-lg font-bold">${calculateSubTotal()} </span>
            </div>
            <div className="text-[#2D5E2E] flex items-center justify-between mx-6 my-3">
              <p className="font-semibold">Shipping</p>
              <span className="font-bold text-lg">
                ${calculateShippingCharge()}
              </span>
            </div>
            <div className="text-[#2D5E2E] flex items-center justify-between mx-6 my-3">
              <p className="font-semibold">tax</p>
              <span className="font-bold text-lg">${calculateTax()}</span>
            </div>
            <div className="font-bold text-xl mt-[15%] border-t-2 text-[#2D5E2E] border-[#2D5E2E] pt-2 flex items-center justify-between mx-6 my-3">
              <p className="">Total</p>
              <span className="">${calculateTotal()}</span>
            </div>
            <div className="flex justify-center">
              <button className="bg-[#2D5E2E] w-[80%] text-white py-2 rounded-md">
                Proceed To Checkout
              </button>
            </div>
          </div>
          <Link href="/menu">
            <button
              style={headerTextStyle}
              className="text-2xl text-transparent font-bold text-center w-full py-2 border-t-2 rounded-md mt-3 shadow-md shadow-slate-400"
            >
              Back To Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
