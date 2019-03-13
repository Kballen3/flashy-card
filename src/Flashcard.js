import React from 'react'
import { Card, Button, } from 'semantic-ui-react'

const Flashcard = ({ id, topic, question, remove }) => (
    <Card>
        <Card.Content>{topic}</Card.Content>
        <Card.Content>{question}</Card.Content>
        <Card.Content>
            <Button color="blue" onClick={() => remove(id)}>
                Delete
            </Button>
        </Card.Content>

    </Card>
);

export default Flashcard;