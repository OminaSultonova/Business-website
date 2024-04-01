import { Card, Row, Col} from 'react-bootstrap';
import '../index.css';
import iconIntel from '../assets/images/icon-intel.png';
import iconOS from '../assets/images/icon-OS.png';
import iconAccess from '../assets/images/icon-access.png';
import iconApi from '../assets/images/icons-api.png';
import iconContract from '../assets/images/icon-contracts.png';
import iconControl from '../assets/images/icons-control.png';

export const Features = () => {
    return (
    <div>

    <div className='features-box'>
    <h2 className='sub-title'>Our key differentiators</h2>
    <Row className="justify-content-center mb-4">
        <Col sm={10} md={6} lg={4} className="mb-4">
          <Card border="light">
            <Card.Body className="text-center">
            <img className='icons' src={iconIntel}/>
              <Card.Title>Latest Intel & AMD Processors</Card.Title>
              <Card.Text>
              High performance Intel and AMD CPUs <br/>
               guarantee fast performance.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={10} md={6} lg={4} className="mb-4">
          <Card border="light">
            <Card.Body className="text-center">
            <img className='icons' src={iconOS}/>
              <Card.Title>Popular Linux distros and Windows</Card.Title>
              <Card.Text>
              Deploy CentOS, Debian, Ubuntu, Windows,<br/>
            FreeBSD, (and more!) or use our Upload ISO <br/> feature.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={10} md={6} lg={4} className="mb-4">
          <Card border="light">
            <Card.Body className="text-center">
            <img className='icons' src={iconAccess}/>
              <Card.Title>Root administrator access</Card.Title>
              <Card.Text>
              Full root access and a dedicated IP address <br/>
               included with all VMs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <Row className="justify-content-center">
        <Col sm={10} md={6} lg={4} className="mb-4">
          <Card border="light">
            <Card.Body className="text-center">
            <img className='icons' src={iconApi}/>
              <Card.Title>Powerful API</Card.Title>
              <Card.Text>
              Integrate with our API to quickly spin up, destroy,<br/> 
              and control your instances.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={10} md={6} lg={4} className="mb-4">
          <Card border="light">
            <Card.Body className="text-center">
            <img className='icons' src={iconContract}/>
              <Card.Title>No Long Term Contracts</Card.Title>
              <Card.Text>
              Hourly billing is standard on our products and <br/> services.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={10} md={6} lg={4} className="mb-4">
          <Card border="light">
            <Card.Body className="text-center">
            <img className='icons' src={iconControl}/>
              <Card.Title>Feature-rich control panel</Card.Title>
              <Card.Text>
            Many features are available with one-click:<br/>
             Restart, Reboot, Reinstall, Change OS, View <br/>Console and more!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        </div>
            </div>
          )
        }

        export default Features;
        