import React, {Component} from 'react'
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import FunFact from './components/FunFact';
import SedComponent from './components/SedComponent';
import TestState from './components/TestState';
import Games from './components/Games';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Sed3 from './assets/Sed3.png';
import Image from 'react-bootstrap/Image';
import Home from './components/Home';
import Row from 'react-bootstrap/Row';


class Routes extends Component{
    render(){
        return(
            <Router>
                <Container className="p-3">  
                <NavBar />
                <hr />
                <Row>
                <Image alt="" src={Sed3} width ="350" height ="350" />
                <Jumbotron>            
                <Route name="Home" exact path="/home" component={Home} />
                <Route name="SedComponent" exact path="/aboutSeDB" component={SedComponent}/>
                <Route name="FunFact" exact path="/funfact" component={FunFact}/>
                <Route name="TestState" exact path="/Test" component={TestState}/>
                <Route name="Games" exact path="/games"  component={Games} />
                </Jumbotron>
                </Row>
                <hr />
                <Footer />
                
                </Container>
            </Router>
           
        )
    }
}

export default Routes;