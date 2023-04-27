import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  remove,
  addQuantity,
  minusQuantity,
} from "@/src/store/slice/CartSlice";
import Button from "../UI/Button";

const CartData = () => {
  const [total, setTotal] = useState(0);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const RemoveCartItem = (id) => {
    dispatch(remove(id));
  };

  const addMoreQuantity = (item) => {
    dispatch(addQuantity(item));
    setTotal(total + item.price);
  };

  const removeQuantity = (item) => {
    dispatch(minusQuantity(item.id));
    setTotal(total - item.price);
  };
  return (
    <div className="flex justify-between">
      <div className="pt-7 w-4/6 bg-slate-100">
        {cartItems.length == "" ? (
          <h1 className="text-center mt-10 text-2xl font-semibold">
            Your Cart is empty.
          </h1>
        ) : (
          cartItems.map((product) => {
            return (
              <React.Fragment key={product.id}>
                <div className="flex mb-5 rounded-xl ml-5">
                  <img
                    src={product.image}
                    alt=""
                    className="object-cover h-[150px] w-[150px]"
                  />
                  <div className="ml-14 w-full">
                    <div className="grid grid-cols-2 ">
                      <h5 className="font-medium text-2xl">{product.title}</h5>
                      <h5 className="font-bold place-self-end mr-3">
                        {product.quantity} * ₹{product.price}
                      </h5>
                    </div>

                    <div className="w-[160px] grid grid-cols-2 gap-2 mt-6">
                      <Button
                        className=" py-2"
                        onClick={() => removeQuantity(product)}
                      >
                        -
                      </Button>
                      <Button onClick={() => addMoreQuantity(product)}>
                        +
                      </Button>
                    </div>
                    <h6 className="bg-white w-[100px] text-lg mt-4 h-8 text-center rounded-sm px-4">
                      Qty: {product.quantity}
                    </h6>
                    <Button
                      className="rounded-md px-3 py-2 mt-2 bg-amber-500"
                      onClick={() => RemoveCartItem(product.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
                <hr />
                <br />
              </React.Fragment>
            );
          })
        )}
      </div>
      <div className="bg-slate-100 w-[30%] pt-7">
        <div>
          <h1 className="text-center font-semibold">
            {cartItems.length} items added in your cart
          </h1>
        </div>
        {cartItems.map((item) => {
          return <img src={item.image} className="h-[100px]" key={item.id} />;
        })}
        {/* <h1>total: {total}</h1> */}
      </div>
    </div>
  );
};

export default CartData;
