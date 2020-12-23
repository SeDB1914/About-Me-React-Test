import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'

class NavBar extends Component {
    render(){
      return(
        <Navbar variant="light" expand="lg" bg="dark" className="mx-auto" >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Link to="/home" >Home </Link> | <span />
          <Link to="/aboutSeDB">About SeDB</Link> | <span />
          <Link to="/funfact">Fun Facts</Link> | <span />
          <Link to="/Test">Test</Link> | <span />
          <Link to="/Games">Games</Link>  <span />
        </Navbar>
      );
    }
  }

  export default NavBar;