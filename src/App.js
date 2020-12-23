import './App.css';
import Routes from './Routes'
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <Container fluid="lg"> 
      <Routes /> 
      
    </Container>
  );
}

export default App;
