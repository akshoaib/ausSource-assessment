import React from "react";
import { Col } from "react-bootstrap";
import Text from "../UI/Text";
import Title from "../UI/Title";
import Comma from "../../assets/comma.png";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import { Pagination } from "swiper/react";
// import "swiper/components/pagination/pagination.min.css";
import { useWindowSize } from "@uidotdev/usehooks";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css/pagination";

import "./style.css";
const SwiperSlider = ({ customerData }) => {
  const size = useWindowSize();

  console.log({ size });

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={size?.width > 554 ? 3 : 2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        className="mySwiper"
      >
        <div>
          {customerData?.map((val, idx) => {
            return (
              <>
                <SwiperSlide className="my-4">
                  <div className="customer-card px-4 py-4 d-flex flex-column align-items-center justify-content-center">
                    <img width={40} height={40} src={Comma} />
                    <Text
                      styles="text-center mt-2"
                      content={
                        "It va esser tam simplic quam Occidental in fact it va esser Occidental angles quam un angles quam un."
                      }
                    />
                  </div>
                  <div className="d-flex justify-content-center flex-column">
                    <img
                      className="rounded-5 mx-auto mt-3"
                      width={40}
                      height={40}
                      src={val?.image}
                    />
                    <Title
                      styles="mx-auto mt-2"
                      content={val?.title}
                      varient="ternary"
                    />
                    <Text styles="mx-auto mb-4" content={val?.text} variet="" />
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </div>
      </Swiper>
    </>
  );
};

export default SwiperSlider;
