import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    //A class-based component needs to have a render method at a minimum. A functional component needs to have, at minimum, a return that returns some JSX. This is a class-based component, and the div with the h2 is JSX. In either case you'll be looking at JSX. You technically could avoid it but you wouldn't want to.

    //between render and return you could add some regular JS, like a conditional or variable. But don't set state bc that leads to infinite loops and that's bad for business.

    render() {
        return (
            <div className="Clock" >
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;