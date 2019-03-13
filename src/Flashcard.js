import React from 'react'
import { Card, Button, } from 'semantic-ui-react'

const Flashcard = ({ topic, question }) => (
    <Card>
        <Card.Content>{topic}</Card.Content>
        <Card.Content>{question}</Card.Content>
        <Card.Content>
            <Button color="blue">
                Delete
            </Button>
        </Card.Content>

    </Card>
);

export default Flashcard;