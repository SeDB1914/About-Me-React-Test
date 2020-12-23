import React, {Component} from 'react';

import TicTacToe from './TicTacToe';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'


class Games extends Component {
    render(){
        return(
           
              
              <Jumbotron>
                <CardDeck>
                    <Card>
                        <Card.Body>
                            <Card.Title>TicTacToe</Card.Title>
                             <TicTacToe />
                            <Card.Text> Tic-Tac-Toe coming soon</Card.Text>
                        </Card.Body>
    
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Tetris</Card.Title>
                            <Card.Text>Tetris coming soon...</Card.Text>
                        </Card.Body>
    
                    </Card>

                    <Card>
      
                        <Card.Body>
                            <Card.Title>Shoot</Card.Title>
                            <Card.Text>Rock, Paper, Scissors coming soon...</Card.Text>
                        </Card.Body>
    
                    </Card>
                </CardDeck>
             </Jumbotron>   
              
              
              
              
          
        );
    }
}

export default Games;