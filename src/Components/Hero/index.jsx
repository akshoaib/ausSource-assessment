import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomButton from "../UI/CustomButton";
import CustomInput from "../UI/CustomInput";
import Text from "../UI/Text";
import Title from "../UI/Title";
import BannerImage from "../../assets/banner-image.png";
import "./style.css";
const Hero = () => {
  return (
    <>
      <Container fluid className="hero">
        <Row className="p-2 p-md-5">
          <Col md={6} className="p-5 d-flex flex-column justify-content-center">
            <Title
              styles="p-2 p-md-5"
              shadow
              content={
                <>
                  Create Amazing Landing Page With{" "}
                  <span style={{ color: "#3956de" }}>Nody</span>
                </>
              }
            />
            <Text
              varient={"primary"}
              styles={"px-2 px-md-5"}
              content={
                <>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione sequinesciunt.
                </>
              }
            />
            <div className="d-flex flex-column flex-sm-row px-2 px-md-5 mt-3 justify-content-start align-items-start align-items-md-center">
              <CustomInput
                varient="primary"
                placeholder="Enter Your Email..."
              />
              <CustomButton
                styles={"mt-2 mt-sm-0"}
                varient="primary"
                text={"Subscribe"}
              />
            </div>
          </Col>
          <Col md={6}>
            {/* <div> */}
            <img className="banner-img" src={BannerImage} />
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hero;
