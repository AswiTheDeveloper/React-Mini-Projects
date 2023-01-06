import React from 'react';
import { Component } from 'react';

export default class ClassComponent extends Component {

    constructor(props) {
        super(props);
        this.name = props.name;
        this.role = props.role;
    }


    // work() {
    //     return this.name + ' Working';
    // }

    profile() {
        return this.name + ' ' + this.role;
    }





    render() {
        return (

            <>

                <h2>THIS IS MY CLASS COMPONENT..!</h2>
                <h2> {this.profile()} </h2>
                <Fruits />
            </>

        )
    }
}





let Fruits = () => {
    return (
        <>
            <h1>Fruits:</h1>
            <ul>

                <li>APPLE</li>
                <li>ORANGE</li>
                <li>MANGO</li>

            </ul>
        </>
    )
}

