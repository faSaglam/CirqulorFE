import Spinner from 'react-bootstrap/Spinner';
import { Container } from 'react-bootstrap';
export const SpinnerComponent = () => {

    return (
        <Container>
            <Spinner animation="border" role="status" variant='warning' style={{ minHeight: "60vh", minWidth: "60vh" }}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>

    )

}