
import { Container, ListGroup, Row, Col } from 'react-bootstrap';

import { BsFillPlayCircleFill } from 'react-icons/bs'


export function MainPage() {



    return (
        <Container className='m-auto' style={{ maxWidth: "100rem", minHeight: "90vh" }}>
            <ListGroup variant="flush"  >
                <ListGroup.Item className="mt-4 pt-4" style={{ backgroundColor: "transparent", borderBottom: "#84BB25 2px dotted" }} >
                    <a href='/SearchWith' className='text-green-100 fw-bold fs-4 ' style={{ textDecoration: "none" }}>
                        <Row>
                            <Col><span>Search By Material Type</span></Col>
                            <Col><span className='text-light'>Bioplastic, Biocomposite, etc</span></Col>
                            <Col className='text-end'><BsFillPlayCircleFill className="text-green-100" style={{ fontSize: "32px", }} /></Col>
                        </Row>
                    </a>
                </ListGroup.Item>

                <ListGroup.Item className="mt-4 pt-4" style={{ backgroundColor: "transparent", borderBottom: "#84BB25 2px dotted" }} >
                    <a href='/AdvancedSearch' className='fw-bold fs-4' style={{ textDecoration: "none", color: "#32B8C0" }}>
                        <Row>
                            <Col> <span>  Advanced Search</span></Col>
                            <Col> <span className='text-light '>Binder, filler, coating etc</span></Col>
                            <Col className='text-end'><BsFillPlayCircleFill style={{ color: "#32B8C0", fontSize: "32px" }} /></Col>
                        </Row>


                    </a>
                </ListGroup.Item>
                <ListGroup.Item className="mt-4 pt-4" style={{ backgroundColor: "transparent", borderBottom: "#FC5E05 2px dotted" }} >
                    <a href='/ChatSearch' className='text-green-100 fw-bold fs-4' style={{ textDecoration: "none" }}>
                        <Row>
                            <Col> <span>Search With</span></Col>
                            <Col><span className='text-orange ' >Chat</span></Col>
                            <Col className='text-end'> <BsFillPlayCircleFill style={{ color: "#FC5E05", fontSize: "32px" }} /></Col>
                        </Row>
                    </a>
                </ListGroup.Item>

            </ListGroup>


        </Container>


    )
}
