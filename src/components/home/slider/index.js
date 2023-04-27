import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Card from "../../UI/Card";

const Slider = () => {
  const categoriesData = [
    {
      category: "Men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      offer: "Holi Offer",
      discount: "5% off",
      disc: "on this Holi",
    },
    {
      category: "Electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      offer: "Holi Offer",
      discount: "10% off",
      disc: "on this Holi",
    },
    {
      category: "Jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      offer: "Holi Offer",
      discount: "10% off ",
      disc: "on this Holi",
    },
    {
      category: "Women's clothing",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      offer: "Holi Offer",
      discount: "5% off ",
      disc: "on this Holi",
    },
  ];
  return (
    <section className="h-[300px]">
      <div className="mt-[50px] h-full">
        <h4 className="font-medium ml-12">TOP CATEGORIES</h4>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              loopFillGroupWithBlank: true,
            },
          }}
          className="mt-5 h-44"
        >
          {categoriesData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Card item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
