import { Container, Carousel} from 'react-bootstrap';

const Testimonials = () => {
  return (
    <>
    <div className='testimonial-box'>
    <h2 className='sub-title'>Testimonials</h2>
    <Container>
      <Carousel interval={4000} pause={false}>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <div className="testimonial-card">
            <blockquote>
        <p>They provide us with a proactive and well-placed service which has made a significant impact on the stability and efficiency of our network.</p>
            </blockquote>
              <h6>John Doe</h6>
              <p>CEO, Company ABC</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <div className="testimonial-card">
            <blockquote>           
              <p>The team is competent, always quick to respond to our issues efficiently. CloudVista understands we need technology to do business, so they make sure our technology is always running smoothly.</p>
              </blockquote>
              <h6>Jane Smith</h6>
              <p>CTO, Company XYZ</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
    </div>
   
    </>
  );
};

export default Testimonials;
