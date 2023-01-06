import React, { Component } from 'react';

class MyStateComponent extends Component {




    constructor(props) {
        super(props);
        this.state = {
            name: 'Developer',
            role: 'FrontEnd',
            isAdmin: true
        }


    };


    render() {
        let pass = 'hello';
        let userPass;


        return (

            <>

                <p>Name: {this.state.name},Role:{this.state.role},Admin:{this.state.isAdmin}</p>
                <button onClick={() => {

                    userPass = prompt('Enter Password?');
                    if (pass === userPass) {
                        this.setState({
                            name: 'sv',
                            role: 'admin',
                            userPass: userPass
                        }
                        );
                    }

                    console.log(this);
                }}>Change</button>

                <h1>{this.props.user} {this.state.userPass}</h1>
            </>
        )
    }



}

export default MyStateComponent;