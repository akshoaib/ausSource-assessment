import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bobbie from "../../assets/bobby.jpg";
import jashua from "../../assets/joshua.jpg";
import sammie from "../../assets/sammy.jpg";
import Comma from "../../assets/comma.png";
import Title from "../../Components/UI/Title";
import Text from "../../Components/UI/Text";
import "./style.css";
import SwiperSlider from "../../Components/SwiperSlider";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
const customerData = [
  {
    image: bobbie,
    title: "Bobby Kelly",
    text: "Graphic Designer, USA",
  },
  {
    image: jashua,
    title: "Joshua Vargas",
    text: "Web Dveloper, USA",
  },
  {
    image: sammie,
    title: "Sammie Lewis",
    text: "UI/UX, USA",
  },
  {
    image: bobbie,
    title: "Bobby Kelly",
    text: "Graphic Designer, USA",
  },
  {
    image: jashua,
    title: "Joshua Vargas",
    text: "Web Dveloper, USA",
  },
  {
    image: sammie,
    title: "Sammie Lewis",
    text: "UI/UX, USA",
  },
];
const Customer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col
            md={6}
            className="mx-auto d-flex flex-column justify-content-center my-5"
          >
            <Title
              styles="text-center"
              varient="secondary"
              content={<>What Our Customers Say</>}
            />
            <Text
              styles="text-center"
              //   styles={"m-3"}
              content={
                <>
                  Ut enim ad minima veniam quis nostrum exercitationem ullam
                  corporis suscipit laboriosam nisi commodi consequatur.
                </>
              }
            />
          </Col>
        </Row>
        <Row>
          <SwiperSlider customerData={customerData} />
        </Row>
      </Container>
    </>
  );
};

export default Customer;
