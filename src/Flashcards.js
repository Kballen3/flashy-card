import React from 'react'
import { Card, } from 'semantic-ui-react'
import Flashcard from './Flashcard';

const Flashcards = (props) => (
    <Card.Group>
        {
            props.flashcards.map( flashcard => (
                <Flashcard key={flashcard.id} {...flashcard} />
            ))
        }

    </Card.Group>
)







export default Flashcards;