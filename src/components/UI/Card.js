import React from "react";
const Card = ({ item, children, className }) => {
  return (
    <div
      className={`card flex justify-evenly m-3 rounded-md text-xl cursor-pointer ${className}`}
    >
      <div className="text-center text-xl md:text-3xl">
        <h1 className="font-bold">{item.category}</h1>
        <h1 className="mt-4 text-2xl md:text-4xl text-green-500 font-mono">
          {item.offer}
        </h1>
        <h1 className="text-lg md:text-7xl font-semibold mt-4 text-blue-900">
          {item.discount}
        </h1>
        <h5 className="md:mt-2">{item.disc}</h5>
      </div>
      <div>
        <img
          src={item.image}
          className="h-[250px] w-72 md:w-[450px] object-cover"
        />
      </div>
    </div>
  );
};

export default Card;
