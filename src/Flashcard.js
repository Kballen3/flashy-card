import React from 'react'
import { Card, Button, } from 'semantic-ui-react'

const Flashcard = ({ id, topic, question, remove }) => (
    <Card>
        <Card.Content>
            <Card.Header>{topic}</Card.Header>
            <Card.Content>
                <Card.Meta>{question}</Card.Meta>
            </Card.Content>
            <Card.Description>
                <Button color="blue" onClick={() => remove(id)}>
                    Delete
                </Button>

            </Card.Description>
        </Card.Content>
    </Card>
);

export default Flashcard;
