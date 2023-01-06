import React, { Component } from 'react';
import Nav from './nav';
// import ClassComponent from './classComponent';
import MyStateComponent from './state';
// import Items from './items';

export default class Home extends Component {


    render() {
        return (
            <>
                <main id='home'>
                    <Nav />
                    <h1>LEARNING REACT</h1>
                    {/* <ClassComponent role={'FrontEnd'} name={'Alex'} /> */}

                </main>
                <MyStateComponent user='sv' pass='12345' />
                {/* <Items /> */}
            </>
        )
    }


}









