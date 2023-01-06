import React, { Component } from 'react';
import axios from 'axios';
const base = 'https://jsonplaceholder.typicode.com/users';
export default class GetData extends Component {



    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
        this.getData = this.getData.bind(this);
        this.postData = this.postData.bind(this);
        this.deleteData = this.deleteData.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    getData() {

        (async () => {


            axios.get(base + '/1').then(
                result => {
                    this.setState(result);
                }
            )
        })()

        console.log(this.state.data)

    }

    postData() {
        (async () => {
            let temp = await axios.post(base, {
                name: 'SV',
                role: 'FrontEnd',
                phone: 5455565
            })
            this.setState(temp);
            console.log(temp);

        })()


    }
    updateData() {
        (async () => {
            let temp = await axios.put(base + '/1', {
                title: 'Hello Programmers',
                test: 'This data is Updated'
            });
            console.log(temp)
            this.setState({
                data: {
                    name: this.state.data.name,
                    role: this.state.data.role,
                    phone: this.state.data.phone,
                    title: temp.data.title,
                    test: temp.data.test
                }
            })
        })()


    }
    deleteData() {
        (async () => {
            let temp = await axios.delete(base + '/1');
            console.log(temp);
            if (!temp.data == '') {
                this.setState({ data: { name: 'No Data...' } })
            }
            // this.setState(temp);

        })()
    }


    render() {
        let data = this.state.data;
        let styles = { padding: '.5rem', color: 'red' }
        return (


            <main>
                <button onClick={this.getData}>Get Data</button>
                <button onClick={this.postData}>Post Data</button>
                <button onClick={this.updateData}>Update Data</button>
                <button onClick={this.deleteData}>Delete Data</button>

                <tr><th style={styles}>{data.name}</th><td style={styles}>{data.role}</td><td style={styles}>{data.phone}</td></tr>

                <p>{data.title}</p>
                <p>{data.test}</p>

            </main>

        )
    }
}