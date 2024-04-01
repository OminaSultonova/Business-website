import { Container, Accordion } from 'react-bootstrap';
import '../index.css'; 

const AccordionCard = () => {
  return (
    <>
    <Container>
    <div className='features-box'>
    <h2 className='sub-title'>Powerful add-ons</h2>
    <Accordion defaultActiveKey='0' className='mt-5 p-3'>
        <Accordion.Item eventKey='0' className='item'>
            <Accordion.Header>Backups</Accordion.Header>
            <Accordion.Body>Automatic backups are extremely important for
             mission critical systems. Enable scheduled backups with 
             just a few clicks from the customer portal.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2' className='item'>
            <Accordion.Header>Snapshots</Accordion.Header>
            <Accordion.Body>A snapshot is a copy of your
             entire server. Our snapshot system can be used 
             to create copies of existing servers and automate deployments.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3' className='item'>
            <Accordion.Header>Firewall</Accordion.Header>
            <Accordion.Body>Our web-based firewall solution 
            can be enabled on-demand to protect one or 
            more compute instances. Our firewall 
            intercepts traffic before firewall software on your servers.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='4' className='item'>
            <Accordion.Header>Flexible Networking</Accordion.Header>
            <Accordion.Body>Cloud applications require flexible 
            networking configurations. Our cloud instances
             support dynamic changes to IPv4, IPv6, and 
             private networks.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='5' className='item'>
            <Accordion.Header>DDoS Protection</Accordion.Header>
            <Accordion.Body>DDoS protection is essential for maximum 
            uptime and peace of mind. Our DDoS mitigation
             system offers protection against layer 3 and 
             layer 4 network attacks.</Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </div>
    </Container>

    </>
  )
};

export default AccordionCard;
