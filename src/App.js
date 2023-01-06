import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, NavLink } from "react-router-dom";

import React from 'react';
import Home from './home';
import Parent from './about';
import NotesApp from './notes';
import GetData from './axios';
import Quiz from './quiz';
import Accordion from './accordion';
import Form from './form';
import Calendar from './calendar';
import StopWatch from './stopWatch';
import Aswi from './aswi';
import MyComponent from './typescript/basics';

class App extends React.Component {
  render() {
    return (
      <>
        {/* 
        <Router>

          <main className='main-page'>

            <nav>

              <h2><NavLink to='/aswi' style={({ isActive }) =>
              ({
                color: isActive ? 'lightgreen' : 'white',
                textDecoration: 'none'
              })}>Aswi</NavLink> </h2>
              <ul>

                <li><NavLink to='/calendar' style={({ isActive }) =>
                ({
                  color: isActive ? 'lightgreen' : 'white',
                  textDecoration: 'none'
                })}>Calendar</NavLink></li>

                <li><NavLink to='/stopwatch' style={({ isActive }) =>
                ({
                  color: isActive ? 'lightgreen' : 'white',
                  textDecoration: 'none'
                })}>Stop Watch</NavLink></li>
                <li><NavLink to='/notesApp' style={({ isActive }) =>
                ({
                  color: isActive ? 'lightgreen' : 'white',
                  textDecoration: 'none'
                })}>Notes App</NavLink></li>
                <li><NavLink to='/quiz' style={({ isActive }) =>
                ({
                  color: isActive ? 'lightgreen' : 'white',
                  textDecoration: 'none'
                })}>Quiz</NavLink ></li>

              </ul>
            </nav>

            <section>


              <Routes>
                <Route exact path='/aswi' element={<Aswi />}></Route>
                <Route exact path='/calendar' element={<Calendar />}></Route>
                <Route exact path='/stopwatch' element={<StopWatch />}></Route>
                <Route exact path='/notesApp' element={<NotesApp />}></Route>
                <Route exact path='/quiz' element={<Quiz />}></Route>

                <Route path='/' element={<Navigate to='/calendar' />}> </Route>




              </Routes>

            </section>

          </main>


        </Router> */}


        <MyComponent />


        {/* <NotesApp /> */}

        {/* <GetData />   on Axios */}

        {/* <Quiz /> */}

        {/* <Accordion /> */}

        {/* <Form /> */}
        {/* 
        <Calendar />
        <StopWatch /> */}

      </>
    )
  }
}



export default App;
