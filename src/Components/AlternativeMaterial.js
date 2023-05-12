
import cirqulorLogo from '../Shares/cq_logo_frame.png'
import aml from '../Shares/AML_icon_Color 1.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function AlternativeMaterial() {


    return (
        <Container className='mt-5 p-3' >
            <Row>
                <Col xs={1} className='m-0 text-end'> <img src={aml} alt="aml" style={{ maxHeight: "100px", maxWidth: "100px" }} /></Col>
                <Col>
                    <h2 className='text-start text-light fw-bold'>Alternative Materials Library</h2>
                    <p className='text-green-100 fs-3 fw-'>A growing database of alternative to plastic materials making search easier than ever</p>
                </Col>
            </Row>



        </Container >


    )
}