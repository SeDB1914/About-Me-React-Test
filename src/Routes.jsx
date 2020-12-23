import React, {Component} from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import FunFact from './components/FunFact';
import SedComponent from './components/SedComponent';
import TestState from './components/TestState';
import Games from './components/Games';

import Home from './components/Home';

class Routes extends Component{
    render(){
        return(
            <Router>
                <Navbar />
                <hr />
                <Route name="Home" exact path="/home" component={Home} />
                <Route name="SedComponent" exact path="/aboutSeDB" component={SedComponent}/>
                <Route name="FunFact" exact path="/funfact" component={FunFact}/>
                <Route name="TestState" exact path="/Test" component={TestState}/>
                <Route name="Games" exact path="/games"  component={Games} />
                <hr />
                <Footer />
            </Router>
        )
    }
}

export default Routes;