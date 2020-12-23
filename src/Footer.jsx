import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render(){
      return(
        <div className="nav">
          <Link to="/aboutSeDB">About SeDB</Link> | 
          <Link to="/funfact">Fun Facts</Link> | 
          <Link to="/Test">Test</Link> |
          <Link to="/Games">Games</Link>  
        </div>
      );
    }
  }

  export default Footer;