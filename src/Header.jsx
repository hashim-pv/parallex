import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import catlogo from './image/catlog.png'


export function Header() {
  return (
    <>
      <Navbar className='nav' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img className='catlogo me-5'  src={catlogo} alt="" />CATSY</Navbar.Brand>
          <Nav className="me-5">
            <Nav.Link className='ms-5 fw-bolder' href="#home">Home</Nav.Link>
            <Nav.Link className='ms-5 fw-bolder'  href="#features">Services</Nav.Link>
            <Nav.Link className='ms-5 fw-bolder'  href="#pricing">Madi-care</Nav.Link>
            <Nav.Link className='ms-5 fw-bolder'  href="#pricing">Blog</Nav.Link>
            <Nav.Link className='ms-5 fw-bolder'  href="#pricing">Training</Nav.Link>
</Nav>
        </Container>
      </Navbar>
    </>
  );
}
