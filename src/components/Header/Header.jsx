import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Logo/Logo';
import HeaderBtn from '../Header-btn/Header-btn';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="p-3">
        <Container>
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink href="#home" className="fs-6 fw-normal text-dark" to="/" style={{padding: 10}}>Home</NavLink>
              <NavLink href="#shop" className="fs-6 fw-normal text-dark" style={{padding: 10}}>Shop</NavLink>
              <NavLink href="#pages" className="fs-6 fw-normal text-dark" style={{padding: 10}}>Pages</NavLink>
              <NavLink href="#Portfolio" className="fs-6 fw-normal text-dark" style={{padding: 10}}>Portfolio</NavLink>
              <NavLink href="#Portfolio" className="fs-6 fw-normal text-dark" to="/gallery" style={{padding: 10}}>Gallery</NavLink>
              <NavLink href="#about" className="fs-6 fw-normal text-dark" style={{padding: 10}}>About</NavLink>
              <NavLink href="#contact" className="fs-6 fw-normal text-dark" to="/collas" style={{padding: 10}}>Contact Us</NavLink> 
              <NavLink href="#contact" className="fs-6 fw-normal text-dark" to="/studentdetails" style={{padding: 10}}>Add</NavLink> 
            </Nav>
            <HeaderBtn/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
