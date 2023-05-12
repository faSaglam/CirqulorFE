// import { useState } from 'react';

// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { ListGroup } from 'react-bootstrap';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import cirqulorLogo from '../Shares/cq_logo_frame.png'
// import { BsFillPlayCircleFill } from 'react-icons/bs'

// export function OffCanvas() {
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);


//     return (
//         <>
//             <GiHamburgerMenu style={{ color: '#84BB25', fontSize: "32px" }} onClick={handleShow} />
//             <Offcanvas style={{ backgroundColor: "#414D41" }} show={show} onHide={handleClose}>
//                 <Offcanvas.Header closeButton>
//                     <Offcanvas.Title className='fw-bold fs-1 text-light'>
//                         <a href='/' className='text-light fs-4' style={{ textDecoration: "none" }}><img src={cirqulorLogo} alt="library" style={{ maxWidth: "300px" }} /></a>
//                     </Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body >
//                     <h3 className='text-green-100'>Search Options</h3>
//                     <hr style={{ border: "2px solid #84BB25" }} />
//                     <ListGroup variant="flush" >
//                         <ListGroup.Item style={{ backgroundColor: "transparent" }} className='text-warning fs-4'>
//                             <a href='/SearchWith' className='text-warning fs-4' style={{ textDecoration: "none" }}>Search By Material Type <BsFillPlayCircleFill style={{ color: "#84BB25", fontSize: "32px" }} /></a>
//                         </ListGroup.Item>
//                         {/* <ListGroup.Item style={{ backgroundColor: "transparent" }} >
//                             <a href='/TypeSearch' className='text-warning fs-4' style={{ textDecoration: "none" }}>Search By Material Type <BsFillPlayCircleFill style={{ color: "#84BB25", fontSize: "32px" }} /></a>
//                         </ListGroup.Item> */}
//                         <ListGroup.Item style={{ backgroundColor: "transparent" }} className='text-warning fs-4'>
//                             <a href='/AdvancedSearch' className='text-warning fs-4' style={{ textDecoration: "none" }}>Advanced Search <BsFillPlayCircleFill style={{ color: "#84BB25", fontSize: "32px" }} /></a>
//                         </ListGroup.Item>
//                         <ListGroup.Item style={{ backgroundColor: "transparent" }} className='text-warning fs-4'>
//                             <a href='/ChatSearch' className='text-warning fs-4' style={{ textDecoration: "none" }}>Search With Chat <BsFillPlayCircleFill style={{ color: "#84BB25", fontSize: "32px" }} /></a>
//                         </ListGroup.Item>

//                     </ListGroup>
//                 </Offcanvas.Body>
//             </Offcanvas>

//         </>


//     )
// }

