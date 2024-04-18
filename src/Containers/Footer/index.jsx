import React from "react";
import footerLogo from "../../assets/footer-logo.png";
import Text from "../../Components/UI/Text";
import { SlSocialInstagram } from "react-icons/sl";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../../Components/UI/Title";
const Footer = () => {
  return (
    <>
      <Container fluid>
        <Row className="footer my-5">
          <Col md={5}>
            <div className="logo">
              <img className="" src={footerLogo} />
              <Text content="Cras ultricies mi eu turpis sit hendrerit fringilla vestibulum ante ipsum primis in faucibus ultrices posuere cubilia." />
              <Text
                icon={<SlSocialInstagram />}
                content={"Join us On instagram"}
              />
            </div>
          </Col>
          <Col md={2}>
            <Title
              varient={"secondary"}
              content="Customer"
              styles="text-white"
            />
            <Text content={"Works"}></Text>
            <Text content={"Strategy"}></Text>
            <Text content={"Releases"}></Text>
            <Text content={"Press"}></Text>
            <Text content={"Mission"}></Text>
          </Col>
          <Col md={2}>
            <Title
              varient={"secondary"}
              content="Product"
              styles="text-white"
            />
            <Text content={"Trending"}></Text>
            <Text content={"Popular"}></Text>
            <Text content={"Customers"}></Text>
            <Text content={"Features"}></Text>
          </Col>
          <Col md={2}>
            <Title varient={"secondary"} content="Learn" styles="text-white" />
            <Text content={"Developers"}></Text>
            <Text content={"Support"}></Text>
            <Text content={"Customer Services"}></Text>
            <Text content={"Get Started"}></Text>
            <Text content={"Guide"}></Text>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
