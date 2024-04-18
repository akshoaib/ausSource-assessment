import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import Title from "../../Components/UI/Title";
import Text from "../../Components/UI/Text";
import Card from "../../Components/Card";
import ProjectImage from "../../assets/project-image1.jpg";
import { IoEyeOutline } from "react-icons/io5";
import "./style.css";
const Projects = () => {
  const [projects, setProjects] = useState(null);
  const getProjectsData = async () => {
    const data = await axios.get("https://dummyjson.com/products");
    const projects = await data?.data?.products?.slice(0, 6);
    setProjects(projects);
    console.log(projects);
  };

  useEffect(() => {
    getProjectsData();
  }, []);

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
              content={<>Our Latest Project</>}
            />
            <Text
              styles="text-center"
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
          {projects?.map((val, idx) => {
            return (
              <Col md={6} lg={4}>
                {/* <Card key={idx}> */}
                <div className=" rounded p-0">
                  <div className="project-image w-100 rounded ">
                    <img
                      className="rounded"
                      width={"100%"}
                      height="300"
                      src={ProjectImage}
                    />
                    <div className="project-eye d-flex justify-content-center align-items-center rounded">
                      <IoEyeOutline size={30} color="white" />
                    </div>
                  </div>
                  <Title
                    styles={"ms-3 mt-2"}
                    varient="ternary"
                    content={val?.brand}
                  />
                  <Text styles={"ms-2 mt-2"} content={<>{val?.category}</>} />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Projects;
