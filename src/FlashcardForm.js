import React from 'react';
import { Form, } from 'semantic-ui-react';

class FlashcardForm extends React.Component {
    state = { topic: "", question: "", };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.add(this.state);
        this.setState({ topic: "", question: "", });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value, });
    };

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input
                        fluid
                        label="Topic"
                        placeholder="Topic"
                        name="topic"
                        value={this.state.topic}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        fluid
                        label="Question"
                        placeholder="Question"
                        name="question"
                        value={this.state.question}
                        onChange={this.handleChange}
                    />
                    <Form.Button>Submit</Form.Button>
                </Form.Group>
            </Form>
        )
    }
}










export default FlashcardForm;