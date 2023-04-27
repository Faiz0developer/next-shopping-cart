import CartData from "@/src/components/cart";
import React from "react";

const CartPage = () => {
  return (
    <div className="ml-10 mt-10 ">
      <div className="flex justify-between mx-4  w-[63%]">
        <h1 className="text-2xl">Shopping Cart</h1>
        <h1>Price</h1>
      </div>
      <hr />
      <CartData />
    </div>
  );
};

export default CartPage;
