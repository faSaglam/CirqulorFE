
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { RiHome2Line } from 'react-icons/ri'

import { OffCanvas } from './OffCanvas';
import { NavItem } from 'react-bootstrap';


export const NavBar = () => {
    return (
        <Navbar bg="green-400"  >
            <Container fluid className=' text-green-100' style={{ maxHeight: "30px" }} >
                {/* <Nav.Item><Nav.Link href="#home" style={{ color: '#84BB25', fontSize: "32px" }}><OffCanvas /><GiHamburgerMenu /></Nav.Link></Nav.Item> */}

                <Nav.Item><OffCanvas /></Nav.Item>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className="fw-bold" href='https://cirqulor.com/cirqulor-platform/'>CIRQULOR</Nav.Link>

                    <NavItem className='ms-2 me-2 pb-2 fw-bold'>.</NavItem>

                    <Nav.Link className='ms-2 me-2 fw-bold' href='https://cirqulor.com/blog/'>360°</Nav.Link>

                    <NavItem className='ms-2 me-2 pb-2 fw-bold'>.</NavItem>

                    <Nav.Link className='ms-2 me-2 fw-bold' href='https://cirqulor.com/glossary/'>GLOSSARY</Nav.Link>


                    <NavItem className='ms-2 me-2 pb-2 fw-bold'>.</NavItem>
                    <Nav.Link className='ms-2 me-2 pb-2' href="https://cirqulor.com/" style={{ color: "#84BB25", fontSize: "32px" }} ><RiHome2Line /></Nav.Link>

                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}