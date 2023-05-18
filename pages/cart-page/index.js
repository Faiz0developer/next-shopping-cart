import CartData from "@/src/components/cart";
import React from "react";

const CartPage = () => {
  return (
    <div className="mt-10 ">
      <div className="flex justify-between border-b-2  ">
        <h1 className="text-2xl ml-16">Shopping Cart</h1>
        <h1 className="mr-20 hidden md:flex">Price</h1>
      </div>
      <CartData />
    </div>
  );
};

export default CartPage;
