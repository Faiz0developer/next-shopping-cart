import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { add } from "@/src/store/slice/CartSlice";

const index = ({ product }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { itemID } = router?.query;
  console.log("paramsId", product);

  const addData = () => {
    const itemData = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
      rating: product.rating,
      totalPrice: product.price,
      category: product.category,
    };
    dispatch(add(itemData));
  };
  return (
    <div
      className={`flex flex-col md:flex-row w-[90%] my-5 rounded-md shadow-sm shadow-black justify-evenly p-3 gap-10 md:p-8 mx-auto bg-slate-300`}
    >
      <div>
        <img src={product.image} className="w-full object-cover h-[300px]" />
      </div>
      <div className="flex flex-col w-full md:w-1/2 mr-10">
        <h1 className="font-semibold text-2xl md:text-4xl mt-1">
          {product.title}
        </h1>
        <p className="text-sm mt-4">{product.description}</p>
        <hr />
        <h1 className="mt-3 font-semibold text-3xl">₹{product.price}</h1>
        <p>
          rating: <span className="font-semibold">{product.rating.rate}</span>
        </p>
        <button
          className="px-4 py-3 mt-3 bg-blue-900 text-white rounded-md active:scale-95 hover:bg-blue-800"
          onClick={addData}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.params.itemID}`
  );
  const product = await res.json();
  console.log(context);
  return { props: { product } };
};

export default index;
