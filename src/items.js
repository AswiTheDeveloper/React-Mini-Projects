import React, { Component } from 'react';


let temp;
let data;




export default class Items extends Component {



    constructor(props) {
        super(props);
        // console.log(this);
        // this.getData = this.getData.bind(this);
        this.state = ({ name: 'sv' })
    }




    render() {

        fetch('https://fakestoreapi.com/products').then(
            res => res.json()
        ).then(res => {
            data = res;
            console.log(data);

            this.setState({ data })
            console.log(this);
            temp = data.map((e, i) => {
                return (<><h6>{e.title}</h6> <img src={e.image} alt='' /></>)
            })

        })
        // console.log(data);
        // this.state({ data });

        return (

            <main><h1>Fetching Items</h1>
                <section>{temp}</section>
                <h1>Check</h1>
            </main>
        )
    }


}

