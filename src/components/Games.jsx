import React, {Component} from 'react';
// import {BrowserRouter as Router ,Route} from 'react-router-dom';
import TicTacToe from './TicTacToe';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
// import HowsYourDay from './HowsYourDay';


class Games extends Component {
    render(){
        return(
           
              
              <Jumbotron className ="fluid" >
                <CardDeck>
                    <Card>
                    <Card.Img variant="top" src="https://www.youcubed.org/wp-content/uploads/2017/03/Tic-Tac-Toe-Product.jpg" />
                        <Card.Body>
                            <Card.Title>TicTacToe</Card.Title>
                             <TicTacToe />
                             <Card.Text> Care for a quick game?</Card.Text>
                        </Card.Body>
    
                    </Card>

                    <Card>
                        <Card.Body>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQC3RQ_i051EcABiXMGO4QYQVfGMpd_HEgg&usqp=CAU" />
                            <Card.Title>Tetris</Card.Title>
                            <Card.Text>Tetris coming soon...</Card.Text>
                        </Card.Body>
    
                    </Card>

                    <Card>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdDeUpXgXuWVnTyOVQq2SoQIXFs9TUHQ72_w&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Shoot</Card.Title>
                            <Card.Text>Rock, Paper, Scissors coming soon...</Card.Text>
                            </Card.Body>
    
                    </Card>
                    <Card>
                    <Card.Img variant="top" src="data:image/png;base64,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" />
                        <Card.Body>
                            <Card.Title>How's Your Day?</Card.Title>
                            {/* <HowsYourDay /> */}
                            <Card.Text>Curious as to how your day will go. Click to find out</Card.Text>
                            </Card.Body>
    
                    </Card>
                </CardDeck>
             </Jumbotron>   
              
              
              
              
          
        );
    }
}

export default Games;