import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';


class SedComponent extends Component {
    render(){
        return(
       <Jumbotron>        
        <h2>About me SeDB</h2>
        <Card>
        <Card.Title>Things I like include..</Card.Title>
            <Card.Body>
            <ul>
                <li>Fishing </li>
                <li>BBQing</li>
                <li> Spending time with family</li>
                <li>Food, food, food</li>
            </ul> 
            </Card.Body>   
        </Card>
        </Jumbotron>
         
    ) }
    }
  export default SedComponent;


