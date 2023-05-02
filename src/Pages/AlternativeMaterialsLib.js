import cirqulorLogo from '../Shares/cq_logo_frame.png'
import aml from '../Shares/AML_icon_Color 1.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BioBasedMaterialsList } from '../Components/BioBasedMaterials';

export const AlternativeMaterialsLib = () => {


    return (
        <>

            <Container fluid="sm">
                <Row className='align-items-center mt-4'>
                    <Col sm="10"> <img src={cirqulorLogo} alt='logo' /></Col>
                    <Col sm="1"> <img src={aml} alt="aml" style={{ maxHeight: "100px", maxWidth: "100px" }} /></Col>
                </Row>
            </Container>


            <Container className='mt-5 p-3' >
                <h2 className='text-start text-light fw-bold' >Alternative Materials Library</h2>
                <p className='text-green-100 fs-3 fw-'>A growing database of alternative to plastic materials making search easier than ever</p>
            </Container >
            <Container fluid="sm">
                {/* <Search /> */}
            </Container>
            <BioBasedMaterialsList />

        </>
    )

}

