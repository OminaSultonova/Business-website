import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import Cloud1 from '../assets/images/cloud1.png';
import Cloud2 from '../assets/images/cloud2.png';
import map from '../assets/images/map.png';
import Testimonials from './Testimonials';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Features from '../components/Features';


const Solutions = () => {
  return (
    <>
    {/* Card part */}
    <Container className='card-box'>
    <h2 className='sub-title'>Build and scale technology solutions with us.</h2>
    <Row xs={1} sm={2} md={3} lg={3} className="mt-3">
      <Col>
        <Card className="h-100">
          <Card.Body className="text-center">
          <img className='cloud'
          src={Cloud1}
            height='100'
            width='100'
          />
            <Card.Title>High Frequency Cloud Compute</Card.Title>
            <Card.Text>
            High clock speed CPUs deliver up to a 40% increase <br/>
            in performance over standard offerings for hosted <br/> websites and applications with faster and I/O.
            </Card.Text>
            <div className="d-flex justify-content-center">
                <Button variant="outline-primary">Learn More</Button>
              </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={4}>
        <Card className="h-100">
          <Card.Body className="text-center">
          <img className='cloud'
          src={Cloud2}
            height='100'
            width='100'
          /> 
            <Card.Title>Optimized Cloud Compute</Card.Title>          
            <Card.Text>
            Fully dedicated, high-performance CPUs address 
            the most-demanding challenges without noisy neighbors, including CPU-optimized, memory-optimized, and storage-optimized instances.
            </Card.Text>
            <div className="d-flex justify-content-center">
                <Button variant="outline-primary">Learn More</Button>
              </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={4}>
        <Card className="h-100">
          <Card.Body className="text-center">
          <img className='cloud'
          src={Cloud1}
            height='100'
            width='100'
          />    
            <Card.Title>Cloud GPU</Card.Title>        
            <Card.Text>
            Unleash the full potential of artificial intelligence, 
            machine learning and Cloud GPU. 
            Empower your projects with unparalleled performance and adaptability by deploying on Cloud Compute
            </Card.Text>
            <div className="d-flex justify-content-center">
                <Button variant="outline-primary">Learn More</Button>
              </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </Container>
    <hr></hr>
    {/* Map part */}
    <div className='container map-box'>
    <h2 className='sub-title'>Develop locally, deploy globally.</h2>
    <Container fluid className="d-flex justify-content-center align-items-center ">
      <img src={map} alt="Banner" className="img-fluid " />
    </Container>
    <br/>
    <div className="d-flex justify-content-center">
        <Button variant="outline-primary" size="lg">Explore location features</Button>
    </div>
    </div>
    {/* Feature part */}
        <Features />
        <Testimonials />
        <Banner />
        <Footer />
    </>
    
  );
};

export default Solutions;
