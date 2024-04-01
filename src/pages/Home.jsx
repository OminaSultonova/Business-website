import { Container, Button } from 'react-bootstrap';
import NavbarComponent from '../components/Navbar';
import '../index.css';
import Solutions from './Solutins';
import CountDown from '../components/CountDown';
import CookiesPolicyPopup from '../components/Cookie';

// CountDown Timer function part
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 7);
targetDate.setHours(targetDate.getHours() + 5);
targetDate.setMinutes(targetDate.getMinutes() + 30);

const Home = () => {
  return (
    <>
      <CountDown targetDate={targetDate} />
      <NavbarComponent />
      <header className=" hero-bg">
        <div className="row">
        <Container>
          <div className="col-sm-6 hero-content">
            <h1 className='hero-title'>Empowering your <br />digital transformation.</h1>
            <p className='hero-text'>We bring people and technology together to deliver <br />
            tailored cloud solutions. Our experts simplify the <br />
            complex to help you achieve your goals.</p>
            <Button variant="light" className='rounded-lg'>Explore More</Button>
          </div>  
          </Container>  
        </div>
      </header>
      <Solutions />
      <CookiesPolicyPopup />
    </>
  );
};

export default Home;
