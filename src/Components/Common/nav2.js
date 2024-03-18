import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import './nav.css'


const MainNavbar = () => {

  const {userDetails} = useSelector(state=>state.user);
  const navigate = useNavigate();
  
  const doLogout = () => {
    // localStorage.removeItem('token');
    // localStorage.removeItem('user');
    localStorage.clear();
    navigate('/');
  }

  return (
    <Navbar expand="lg" className="navbar-light py-0">
      <Container className='justify-content-between'>
        <Navbar.Brand href="#home" className='logoImg'>ABC Properties</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
          <Nav style={{gap:'30px'}}>
            <Nav.Link href="/home">Home</Nav.Link>
            {userDetails.role===1 && <Nav.Link href="/addNewCourt">Add Court</Nav.Link>} 
            <Nav.Link href="/mybookings">My Bookings</Nav.Link>
           
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <NavDropdown title={userDetails.name} id="basic-nav-dropdown">
            <NavDropdown.Item href="/">Profile</NavDropdown.Item>
            <NavDropdown.Item link onClick={doLogout}>Sign out</NavDropdown.Item>
          </NavDropdown>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNavbar