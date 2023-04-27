"use client";
import React, { useEffect, useState } from "react";
import HeroProduct from "./HeroProduct";

const HeroData = ({ products }) => {
  const [end, setEnd] = useState(8);
  const [page, setPage] = useState({ endPoint: end });

  const handleInfiniteScroll = () => {
    if (
      window.scrollY + window.innerHeight + 1 >=
      document.documentElement.scrollHeight
    ) {
      setEnd(end + 8);
      setPage({
        endPoint: end,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [page]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <h4 className="text-black my-3 font-medium">PRODUCTS</h4>
        <div className="flex flex-wrap -m-4">
          {products.slice(0, page.endPoint).map((item) => {
            return <HeroProduct item={item} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroData;
