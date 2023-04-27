import React from "react";
import { useDispatch } from "react-redux";
import { add } from "@/src/store/slice/CartSlice";
import { useRouter } from "next/router";

const HeroProduct = ({ item }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const addData = () => {
    const itemData = {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      quantity: 1,
      rating: item.rating,
      totalPrice: item.price,
      category: item.category,
    };
    dispatch(add(itemData));
  };

  const itemDetail = (id) => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow-lg">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={item.image}
        />
      </a>
      <div className="mt-4 h-[165px]">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {item.category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {item.title}
        </h2>
        <p className="mt-1">₹{item.price}</p>
      </div>
      <div className="flex justify-between">
        <button
          className="px-4 py-3 bg-blue-900 text-white rounded-md active:scale-95 hover:bg-blue-800"
          onClick={addData}
        >
          Add to Cart
        </button>
        <button
          className="px-4 py-3 bg-slate-500 text-white rounded-md active:scale-95 hover:bg-slate-400"
          onClick={() => itemDetail(item.id)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default HeroProduct;
