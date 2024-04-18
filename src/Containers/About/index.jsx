import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Text from "../../Components/UI/Text";
import Title from "../../Components/UI/Title";
import AboutImage from "../../assets/about-card.png";
import "./style.css";
import { IoIosArrowRoundForward } from "react-icons/io";

const aboutData = [
  {
    title: "DEVELOPMENT",
    name: "Product Development",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni.",
    linkText: "Read More",
  },
  {
    title: "MARKETING",
    name: "Marketing Product",
    description:
      "Temporibus autem quibusdam a officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.",
    linkText: "Read More",
  },
];

const About = () => {
  return (
    <>
      <Container className="about-container">
        <Row className="mt-5">
          <Col
            md={6}
            className="mx-auto d-flex flex-column justify-content-center my-5"
          >
            <Title
              styles="text-center"
              varient="secondary"
              content={<>About Us</>}
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
          <Col
            md={4}
            className="mx-auto d-flex flex-column justify-content-around"
          >
            <Title
              content={
                <>
                  {/* Productive & <br /> Customizable For <br /> <b>Developers</b> */}
                  Productive & Customizable For <br /> <b>Developers</b>
                </>
              }
              varient="secondary"
            />
            <Text
              styles="my-4"
              content="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil atque corrupti molestiae"
            />
            <Text
              iconColor
              icon={<AboutSVG1 />}
              content={"Marketing program activities"}
            ></Text>
            <Text
              iconColor
              icon={<AboutSVG2 />}
              content="Customization product"
            ></Text>
            <Text
              iconColor
              icon={<AboutSVG3 />}
              content="At vero eos accusamus iusto"
            />
            <a>
              More Information <IoIosArrowRoundForward size={30} />
            </a>
          </Col>
          {aboutData.map((val, idx) => {
            return (
              <Col
                md={4}
                className="mx-auto rounded d-flex flex-column justify-content-center"
              >
                <div className="rounded about-image d-flex justify-content-center align-items-center">
                  <img width={200} height={150} src={AboutImage} />
                </div>

                <Text styles="mt-2" content={val.title} />
                <Title varient={"ternary"} content={val.name} />
                <Text content={val.description} />
                <a>
                  {val?.linkText} <IoIosArrowRoundForward size={30} />
                </a>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default About;

const AboutSVG1 = () => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-grid icon-xs text-primary icon-fill-primary icon mr-2"
      >
        <g>
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </g>
      </svg>
    </>
  );
};

const AboutSVG2 = () => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-layout icon-xs text-primary icon-fill-primary icon mr-2"
      >
        <g>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </g>
      </svg>
    </>
  );
};

const AboutSVG3 = () => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-monitor icon-xs text-primary icon-fill-primary icon mr-2"
      >
        <g>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </g>
      </svg>
    </>
  );
};
