import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Text from "../../Components/UI/Text";
import Title from "../../Components/UI/Title";
import { IoIosArrowRoundForward } from "react-icons/io";
import serviceHead from "../../assets/service-head.png";
import serviceTik from "../../assets/service-tik.png";
import serviceLock from "../../assets/service-lock.png";
import "./style.css";

const servicesData = [
  {
    title: "Awesome Support",
    description:
      "Omnicos directe al desirabilite de une nov lingua franca a refusa continuar payar custosi traductores.",
    image: serviceHead,
  },
  {
    title: "Analytics Security",
    description:
      "Omnicos directe al desirabilite de une nov lingua franca a refusa continuar payar custosi traductores.",
    image: serviceTik,
  },
  {
    title: "Data Privacy",
    description:
      "Omnicos directe al desirabilite de une nov lingua franca a refusa continuar payar custosi traductores.",
    image: serviceLock,
  },
];

const Services = () => {
  return (
    <>
      <Container fluid className="services-container py-5">
        <Row>
          <Col
            md={6}
            className="mx-auto d-flex flex-column justify-content-center my-5"
          >
            <Title
              styles="text-center"
              varient="secondary"
              content={"Services"}
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
        <Row className="d-flex justify-content-center">
          {servicesData.map((val, idx) => {
            return (
              <Col
                key={idx}
                md={3}
                className="border mx-3 d-flex justify-content-center flex-column rounded services-card"
              >
                <div className="m-4 rounded service-image d-flex justify-content-center align-items-center">
                  <div className="p-4">
                    <img src={val?.image} />
                  </div>
                </div>

                <Title
                  varient={"ternary"}
                  content={val?.title}
                  styles="text-center"
                />
                <Text content={val?.description} styles="text-center" />
                <a className="text-center mx-auto mb-3">
                  More <IoIosArrowRoundForward size={30} />
                </a>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Services;
