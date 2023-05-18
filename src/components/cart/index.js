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
    <div className="w-11/12 mx-auto ">
      <div className="pt-7 bg-slate-100">
        {cartItems.length == "" ? (
          <h1 className="text-center mt-10 text-2xl font-semibold">
            Your Cart is empty.
          </h1>
        ) : (
          cartItems.map((product) => {
            return (
              <React.Fragment key={product.id}>
                <div className="flex gap-6 md:gap-20  mb-5 rounded-xl md:ml-5">
                  <div>
                    <img
                      src={product.image}
                      alt=""
                      className="object-cover h-60 "
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 justify-between w-full">
                    <div className="flex flex-col gap-10 w-4/5">
                      <h5 className="font-medium text-2xl w-full md:w-3/4 ">
                        {product.title}
                      </h5>
                      <div className="md:w-1/3">
                        <div className="flex gap-2 mb-4">
                          <Button
                            className="py-2 px-6"
                            onClick={() => removeQuantity(product)}
                          >
                            -
                          </Button>
                          <h6 className="text-lg mt-1 h-8 rounded-sm px-4">
                            Qty: {product.quantity}
                          </h6>
                          <Button
                            className="px-6"
                            onClick={() => addMoreQuantity(product)}
                          >
                            +
                          </Button>
                        </div>

                        <Button
                          className="w-full rounded-md px-3 py-2 mt-2 bg-amber-500"
                          onClick={() => RemoveCartItem(product.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-bold place-self-end mr-3">
                        {product.quantity} * ₹{product.price}
                      </h5>
                    </div>
                  </div>

                  {/* <div className=" grid grid-cols-2 gap-32 mt-6">
                      <Button
                        className="py-2"
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
                  </div> */}
                </div>
                <hr />
                <br />
              </React.Fragment>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CartData;
