import React, { Component } from 'react';
import JeopardyService from '../../JeopardyService';

class Jeopardy extends Component {
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {},
            score: 0
        }
    }
    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            this.setState({
                data: result.data[0]
            })
        })
    }
    componentDidMount() {
        this.getNewQuestion();
    }
    render() {

        let category = "loading";

        if (this.state.data.category) {
            category = this.state.data.category.title
        }

        return (
            <div>
                <strong>Score</strong> {this.state.score}
                <strong>Question: </strong> {this.state.data.question} <br />
                <strong>Value: </strong> {this.state.data.value} <br />
                <strong>Category: </strong> {category} <br />


            </div>
        );
    }
}

export default Jeopardy