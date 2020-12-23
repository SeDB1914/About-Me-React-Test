import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render(){
      return(
        <div className="nav">
          <Link to="/home" >Home </Link> | <span />
          <Link to="/aboutSeDB">About SeDB</Link> | <span />
          <Link to="/funfact">Fun Facts</Link> | <span />
          <Link to="/Test">Test</Link> | <span />
          <Link to="/Games">Games</Link>  <span />
        </div>
      );
    }
  }

  export default Navbar;