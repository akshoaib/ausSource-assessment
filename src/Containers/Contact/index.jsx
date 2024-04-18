import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Text from "../../Components/UI/Text";
import Title from "../../Components/UI/Title";
import ContactImage from "../../assets/contact-image.png";
import { BiMessageRounded } from "react-icons/bi";
import CustomButton from "../../Components/UI/CustomButton";
import CustomInput from "../../Components/UI/CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./style.css";
const Contact = () => {
  const postFormValues = async (values) => {
    const res = await axios.post("/postDummy", { values });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required"),
      email: Yup.string()

        .email("Invalid email")

        .required("Required"),
      subject: Yup.string().required("subject required"),
      message: Yup.string().required("message required"),

      //   email: Yup.string().email("Invalid email").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      postFormValues(values);
    },
  });

  return (
    <Container>
      <Row>
        <Col
          md={6}
          className="mx-auto d-flex flex-column justify-content-center my-5"
        >
          <Title
            styles="text-center"
            varient="secondary"
            content={<>Contact Us</>}
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
        <Col className=" d-flex flex-column justify-content-center" md={6}>
          <div className="d-flex justify-content-center">
            <img className="contact-image" src={ContactImage} />
          </div>
          <Title
            styles="text-center mt-3"
            varient="ternary"
            content={<>Are You Facing Any Problem..?</>}
          />
          <Text
            styles="text-center"
            //   styles={"m-3"}
            content={
              <>
                It va esser tam simplic quam Occidental in fact it va esser
                Occidental angles quam un skeptic cambridge es.
              </>
            }
          />
          <CustomButton
            styles="mx-auto"
            varient="secondary"
            text={"Start Live Chat"}
            icon={<BiMessageRounded size={25} />}
          />
          <p className="text-center">Or you can contact at</p>
        </Col>

        <Col md={6} className=" my-auto">
          <Title varient={"ternary"} content="Get in Touch" />
          <form onSubmit={formik.handleSubmit}>
            <Row>
              <Col xl={6} className="mt-3">
                <CustomInput
                  label="Name"
                  varient="primary"
                  placeholder="Enter Your Name..."
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  touched={formik.touched.name}
                  error={formik.errors.name}
                  onBlur={formik.handleBlur}
                />
              </Col>
              <Col xl={6} className="mt-3">
                <CustomInput
                  label="Email Address"
                  varient="primary"
                  placeholder="Enter Your Email..."
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  touched={formik.touched.email}
                  error={formik.errors.email}
                  onBlur={formik.handleBlur}
                />
              </Col>
              <Col md={12} className="mt-3">
                <CustomInput
                  label="Subject"
                  varient="primary"
                  placeholder="Enter Subject..."
                  name="subject"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                  touched={formik.touched.subject}
                  error={formik.errors.subject}
                  onBlur={formik.handleBlur}
                />
              </Col>
              <Col md={12} className="mt-3">
                <CustomInput
                  label="Message"
                  varient="primary"
                  placeholder="Enter Message..."
                  name="message"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  touched={formik.touched.message}
                  error={formik.errors.message}
                  onBlur={formik.handleBlur}
                />
              </Col>
              <Col md={12} className="mt-3">
                <CustomButton varient="primary" text={"Send Message"} />
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
