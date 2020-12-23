import React, {Component} from 'react'
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import FunFact from './components/FunFact';
import SedComponent from './components/SedComponent';
import TestState from './components/TestState';
import Games from './components/Games';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'


import Home from './components/Home';

class Routes extends Component{
    render(){
        return(
            <Router>
                <Container className="p-3">  
                <NavBar />
                <hr />
                <Jumbotron fluid> 
                <Route name="Home" exact path="/home" component={Home} />
                <Route name="SedComponent" exact path="/aboutSeDB" component={SedComponent}/>
                <Route name="FunFact" exact path="/funfact" component={FunFact}/>
                <Route name="TestState" exact path="/Test" component={TestState}/>
                <Route name="Games" exact path="/games"  component={Games} />
                </Jumbotron>
                <hr />
                <Footer />
                
                </Container>
            </Router>
           
        )
    }
}

export default Routes;