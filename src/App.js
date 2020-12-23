import './App.css';
import Routes from './Routes'
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container fluid="lg"> 
      <img src="./assets/sed3.png" alt="" />
      <Routes /> 
      
    </Container>
  );
}

export default App;
