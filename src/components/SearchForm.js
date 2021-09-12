import React, { Component } from 'react'
import {
    Form,
    Button
} from "react-bootstrap";

export class SearchForm extends Component {
    render() {
        return (
            <div>

                <Form.Label>Please Enter Country/City Name</Form.Label>
                <Form.Control type="text"
                    placeholder="Country/City Name"
                    onChange={this.props.handleLocation} />
                <br />
                <Button variant="primary" type="submit" onClick={this.props.handleSubmit}>
                    Explore
                </Button>

            </div>
        )
    }
}

export default SearchForm
