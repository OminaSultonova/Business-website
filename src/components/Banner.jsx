import { Container, Row, Col, Button } from 'react-bootstrap';
import '../index.css';

export const Banner = () => {
  return (
    <div> <div className='cta-banner'>
    <Container fluid className="banner">
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <div className="banner-content">
            <h1>Interested in how your IT systems measure up?</h1>
            <p>Feel free to call us</p>
            <Button variant="primary" size="lg">Request for quaote online</Button>
          </div>
        </Col>
      </Row>
    </Container>
    </div></div>
  )
}

export default Banner;
