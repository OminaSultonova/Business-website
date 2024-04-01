import { Container, Row, Col } from 'react-bootstrap';
import 'boxicons'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Logo title */}
          <Col xs={12} md={3}>
            <h1>CloudVista</h1>
          </Col>
          {/* Services section */}
          <Col xs={12} md={3}>
            <h5>Services</h5>
            <div className='services'>
            <p>Cloud Compute</p>
            <p>Help Desk Support</p>
            <p>Expert IT Support</p>
            <p>Backup and Recovery</p>
            <p>Strategic IT Planning</p>
            </div>
          </Col>
          {/* Contact section */}
          <Col xs={12} md={3}>
            <h5>Contact</h5>
            <p><box-icon name='phone'></box-icon>Phone: 123-456-7890</p>
            <p><box-icon type='solid' name='stopwatch'></box-icon>Mon - Fri: 9 am - 6 pm</p>
            <p><box-icon type='solid' name='envelope'></box-icon>cloudvista@gmail.com</p>
            <p><box-icon type='solid' name='location-plus'></box-icon>Singapore 123290, Orchard Rd 12</p>
          </Col>
        </Row>
        <p className='copyright'>copyright @ 2024 Omina</p>
      </Container>
    </footer>
  );
};

export default Footer;
