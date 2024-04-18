import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosArrowRoundForward } from "react-icons/io";
import FeatureImage from "../../assets/feature-image.png";
import Card from "../../Components/Card";
import Text from "../../Components/UI/Text";
import Title from "../../Components/UI/Title";
import "./style.css";
function Features() {
  const featuresData = [
    {
      title: "Works with Existing Apps",
      description:
        "At solmen necessi a uniform grammatica pronunciation sommun plu paroles ma quande.",
    },
    {
      title: "Easy Email Marketing ",
      description:
        "At solmen necessi a uniform grammatica pronunciation sommun plu paroles ma quande.",
    },
    {
      title: "Get Private Customers Feedback",
      description:
        "At solmen necessi a uniform grammatica pronunciation sommun plu paroles ma quande.",
    },
  ];

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
              content={<>Our Features</>}
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
          <Col className=" d-flex justify-content-center" md={6}>
            <div className="d-flex justify-content-center">
              <img className="feature-image" src={FeatureImage} />
            </div>
          </Col>
          <Col md={6} className="d-flex flex-column">
            {featuresData.map((val, idx) => {
              return (
                <Card styles="">
                  <div className={`${idx === 0 && "feature-card"} px-4 py-3`}>
                    <Title
                      styles="mt-5"
                      varient="ternary"
                      content={val?.title}
                    />
                    <Text content={val?.description} />
                    <a className="text-center my-4 text-decoration-none">
                      More Information <IoIosArrowRoundForward size={30} />
                    </a>
                  </div>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Features;
