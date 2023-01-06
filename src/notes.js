import React, { Component } from 'react';
import './note.css'

let temp;
export default class NotesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            admin: 'sv'
        };
        this.saveNote = this.saveNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.completeNote = this.completeNote.bind(this);
    }


    deleteNote(e) {
        let temp = this.state.data;
        temp = temp.filter((x, y) => y !== e);


        this.setState({
            data: temp
        })
    }


    completeNote(i) {
        let complete = document.querySelectorAll('.complete');

        complete.forEach((x, y) => {
            if (i == y) {
                x.setAttribute('id', 'complete-btn');
            }
        })
    }




    saveNote() {
        let input = document.querySelectorAll('input'),
            title = input[0],
            desc = input[1];
        this.setState((state) => ({
            data: state.data.concat({ title: title.value, desc: desc.value, date: new Date().toDateString() })
        }));
    }



    render() {
        temp = this.state.data;
        temp = temp.map((e, i) => {
            return <aside>
                <article key={i}>

                    <h3 className='complete'>{e.title.toUpperCase()}</h3>
                    <p >{e.desc}</p>
                    <p className='time'>{e.date}</p>

                </article>
                <button onClick={() => {
                    this.completeNote(i)
                }}>Complete</button>
                <button className='del' onClick={() => {
                    this.deleteNote(i)
                }}>Delete</button>
            </aside>
        });

        return (

            <main className='note'>
                <h1>My <span>Notes</span> App</h1>
                <header>
                    <article>
                        <p>Title</p>
                        <input list='title-list' className='input' placeholder='title of your note..' />
                    </article>
                    <article>
                        <p>Description</p>
                        <input list='desc-list' className='input' placeholder='body of note...' />
                    </article>
                    <button onClick={this.saveNote}>Add Note</button>
                </header>
                <section>
                    {temp}

                </section>

                <datalist id='title-list'>
                    <option value='Build something'></option>
                </datalist>

                <datalist id='desc-list'>
                    <option value='Create Notes App with React..'></option>
                </datalist>

            </main>
        )
    }

}