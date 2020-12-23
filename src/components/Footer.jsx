import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends Component {
    render(){
      return(
        <Navbar variant="light" expand="lg" bg="dark" className="mx-auto" flex="lg">
          <Link to="/aboutSeDB">About SeDB</Link> | 
          <Link to="/funfact">Fun Facts</Link> | 
          <Link to="/Test">Test</Link> |
          <Link to="/Games">Games</Link>  
        </Navbar>
      );
    }
  }

  export default Footer;