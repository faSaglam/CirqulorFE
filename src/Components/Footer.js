
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import cirqulorLogo from '../Shares/cq_logo_frame 2.png'
import {
    FaTwitterSquare, FaYoutube, FaFacebookSquare, FaLinkedin, FaInstagram, FaMedium

} from 'react-icons/fa';
export const Footer = () => {

    return (
        <Navbar bg="green-400 m-0" >
            <Container fluid>
                <Row >
                    <Col className='text-green-100 me-5'>
                        <Nav.Item className='fw-bold'>Live!</Nav.Item>
                        <Nav.Item><a style={{ textDecoration: "none" }} className="text-green-100" href='https://cirqulor.com/2022/10/18/cirqulor-2030/'>20in30 Podcast</a></Nav.Item>
                        <Nav.Item className='fw-bold'>Coming Soon</Nav.Item>
                        <Nav.Item className='text-light'>Webinar on Waste</Nav.Item>
                    </Col>
                    <Col className='text-green-100 me-5 ms-5'>
                        <Nav.Item className='fw-bold'> Resources</Nav.Item>
                        <Nav.Item><a style={{ textDecoration: "none" }} className="text-green-100" href='https://cirqulor.com/blog/'>360° </a></Nav.Item>
                    </Col>
                    <Col className='text-green-100 me-5 ms-5'>
                        <Nav.Item className='fw-bold'>About</Nav.Item>
                        <Nav.Item><a style={{ textDecoration: "none" }} className="text-green-100" href='https://cirqulor.com/cirqulor%20platform/'>CirQulor</a></Nav.Item>
                        <Nav.Item><a style={{ textDecoration: "none" }} className="text-green-100" href='https://cirqulor.com/plastics/'>Why alternative-to-plastic materials?</a></Nav.Item>
                        <Nav.Item><a style={{ textDecoration: "none" }} className="text-green-100" href='https://cirqulor.com/values/'>CirQulor values</a></Nav.Item>
                        <Nav.Item><a style={{ textDecoration: "none" }} className="text-green-100" href='https://cirqulor.com/sdg/'>United Nations SDGs</a></Nav.Item>
                    </Col>
                    <Col className='text-green-100 me-5 ms-5'>
                        <Nav.Item className='fw-bold'>Join us</Nav.Item>
                        <Nav.Item><a style={{ textDecoration: "none" }} className="text-green-100" href='https://cirqulor.com/career/'>Careers</a></Nav.Item>
                    </Col>
                    <Col className='text-green-100 me-5 ms-5'>
                        <Nav.Item className='fw-bold'>Contact</Nav.Item>
                        <Nav.Item><a style={{ textDecoration: "none" }} className="text-green-100" href='https://cirqulor.com/contact/'>General enquiries</a></Nav.Item>
                        <Nav.Item><a style={{ textDecoration: "none" }} className="text-green-100" href='https://cirqulor.com/collaborate/'>Collaborate</a></Nav.Item>
                        <Nav.Item><a style={{ textDecoration: "none" }} className="text-green-100" href='https://cirqulor.com/2022/09/28/investment-is-it-still-just-show-me-the-money/'>Invest</a></Nav.Item>
                        <Nav.Item><a style={{ textDecoration: "none" }} className="text-green-100" href='https://cirqulor.com/partner-contact/'>Partner</a></Nav.Item>
                        <Nav.Item><a style={{ textDecoration: "none" }} className="text-green-100" href='https://cirqulor.com/media/'>Media</a></Nav.Item>
                    </Col>
                    <Col className='text-green-100 ms-5 '>

                        <Nav.Item><a style={{ textDecoration: "none" }} className="text-green-100" href='https://cirqulor.com/privacy/'>Privacy Policy</a></Nav.Item>
                        <Nav.Item><a style={{ textDecoration: "none" }} className="text-green-100" href='https://cirqulor.com/privacy/'>Cookie Policy </a></Nav.Item>
                        <Nav.Item><a style={{ textDecoration: "none" }} className="text-green-100" href='https://cirqulor.com/conduct-and-compliance/'>Conduct & Regulatory Compliance</a></Nav.Item>
                        <Nav className='text-light'>
                            <Nav.Link className='text-light' href='https://twitter.com/cirqulor'><FaTwitterSquare /></Nav.Link>
                            <Nav.Link className='text-light' href='#'><FaYoutube /></Nav.Link>
                            <Nav.Link className='text-light' href='https://www.facebook.com/CirQulor'><FaFacebookSquare /></Nav.Link>
                            <Nav.Link className='text-light' href='https://www.linkedin.com/company/cirqulor'><FaLinkedin /></Nav.Link>
                            <Nav.Link className='text-light' href='https://www.instagram.com/cirqulor/'><FaInstagram /></Nav.Link>
                            <Nav.Link className='text-light' href='https://cirqulor.medium.com/'><FaMedium /></Nav.Link>

                        </Nav>
                        <Nav.Item><img src={cirqulorLogo} alt='logo' style={{ maxWidth: "300px", height: "auto" }} /></Nav.Item>

                        <Nav.Item className='text-light fw-bold fs-5'>Integrating people, resources and systems for a postplastic world.</Nav.Item>

                    </Col>

                </Row>
            </Container>
        </Navbar >
    )


}