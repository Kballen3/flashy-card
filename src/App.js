import React, { Component } from 'react';
import { Container, } from 'semantic-ui-react'
import Flashcards from './Flashcards'
import FlashcardForm from './FlashcardForm'
import './App.css';

class App extends Component {
  state = {
    flashcards:[
      { id: 1, topic: "Math", question: "What does cos45 = ?", },
      { id: 2, topic: "Science", question: "What does a photon emit?", },
      { id: 3, topic: "English", question: "Who wrote Of Mice and Men?", },
      { id: 4, topic: "Sports", question: "How many players are on the field in soccer?", }
    ],
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };
  
  addFlashcard = (flashcardData) => {
    let flashcard = { id: this.getId(), ...flashcardData, };
    this.setState({ flashcards: [flashcard, ...this.state.flashcards], });
  };

  render() {
    return (
      <Container>
        <h1> Flash Card Challenge </h1>
        <hr />
        <Flashcards flashcards={this.state.flashcards} />
        <br />
        <br />
        <FlashcardForm add={this.addFlashcard} />

      </Container>
    );
  }
}

export default App;
