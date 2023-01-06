import React, { Component } from 'react';

export default class Parent extends Component {

    constructor(props) {
        super(props);
        this.state = { input: '', users: 3444 }
        this.getInputValue = this.getInputValue.bind(this);
    }

    getInputValue(event) {
        console.log('HI');
        this.setState({
            input: event.target.value
        });
        console.log(this.state.input);
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                users: 99999

            })
        }, 3000)
    }


    render() {


        return (


            <main>

                <input value={this.state.input} onChange={this.getInputValue} />
                <h1>Controlled Input:{this.state.input}</h1>
                <h1>{this.state.users}</h1>

            </main>
        )
    }
}