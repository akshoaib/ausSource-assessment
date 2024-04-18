import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from "./Components/Layout";
import Hero from "./Components/Hero";
import About from "./Containers/About";
import { Container } from "react-bootstrap";
import Services from "./Containers/Services";
import Features from "./Containers/Features";
import Projects from "./Containers/Projects";
import Contact from "./Containers/Contact";
import Footer from "./Containers/Footer";
import Customer from "./Containers/Customers";
function App() {
  return (
    <>
      {/* <div> */}
      <Layout />
      <Hero />
      <About />
      <Services />
      <Features />
      <Projects />
      <Customer />
      <Contact />
      <Footer />
      {/* </div> */}
    </>
  );
}

export default App;
