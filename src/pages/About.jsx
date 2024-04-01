import { Container, Row, Col, Image } from 'react-bootstrap';
import '../index.css';
import Navbar from "../components/Navbar";
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
     <Navbar />
        <header className="header-about">
      <Container>
        <div className="header-content">
          <h1 className="header-title">About</h1>
        </div>
      </Container>
    </header>
    <Container>
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <h2 className='about-title'>Our Mission</h2>
          <p>
          <b>ClouVista</b>, founded in 2020, is on a mission to empower developers and businesses by simplifying the deployment of infrastructure via its advanced cloud platform. CloudVista is strategically located in 20 datacenters around the globe and provides frictionless provisioning of public cloud, storage and single-tenant bare metal.
          <br/>
          <br/>
          <b>CloudVista</b>has made it our priority to offer a standardized highly reliable high performance cloud compute environment in all of the cities we serve. Launching a cloud server environment in 20 cities around the globe has never been easier!
          </p>
        </Col>
        <Col xs={12} md={6}>
          <Image src="../src/assets/images/about.jpg" alt="About" fluid className="about-image" />
        </Col>
      </Row>
    </Container>
    <Banner />
    <Footer />
    </>
  )
}

export default About;
