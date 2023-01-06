import axios from 'axios';
import React, { useState } from 'react'
const base = 'https://the-trivia-api.com/api/questions?categories=science&limit=20&difficulty=easy';
let temp;
let currentQuestion = {
    currentQuestion: ''
};
let options = [];
let btnStyles;
export default function Quiz() {

    const [status, setStatus] = useState({
        questions: [],
        status: 'START',
        check: '',
        ans: ''
    });
    let btn;


    async function getQuestion() {
        temp = await axios.get(base);
        console.log('axios')
        setStatus({
            questions: temp,
            status: 'Submit',
            check: '',
            ans: ''
        });

        showQuestion();
    }






    // if (status.questions.length !== 0) {

    //     showQuestion();
    // }
    function showQuestion() {
        let random = Math.round(Math.random() * 20);
        currentQuestion = temp.data[random];
        options = [currentQuestion.correctAnswer, ...currentQuestion.incorrectAnswers];
        let check = [];

        function shuffleAnswers() {
            if (check.length !== 4) {
                let random = Math.trunc(Math.random() * 4)

                if (!check.includes(options[random])) {
                    check.push(options[random])
                }



                if (check.length == 4) {
                    return;
                }
                else {
                    shuffleAnswers();
                }
            }

        }

        shuffleAnswers();
        options = check;
        console.log(options, check)
    }

    function checkAnswer(e) {
        let btn = document.querySelector('.btn');
        let list = document.querySelectorAll('.list');
        list.forEach((e, i) => {
            e.classList.add('lost')
        })
        btn.classList.remove('styles');


        setStatus({
            questions: status.questions,
            status: 'Checking....'
        });



        setTimeout(() => {

            if (currentQuestion.correctAnswer == e) {
                setStatus({
                    status: 'Correct',
                    questions: status.questions

                });


                setTimeout(() => {
                    setStatus({
                        questions: status.questions,
                        status: 'Submit'
                    });
                    btn.classList.add('styles')
                    list.forEach((e, i) => {
                        e.classList.remove('lost')
                    })
                    showQuestion();

                }, 1000)
            }

            else {
                setStatus({
                    status: 'Wrong Answer',
                    questions: status.questions
                })
                list.forEach((e, i) => {
                    e.classList.remove('lost')
                })
            }

        }, 1000)





    }


    return (



        <main className='quiz'>


            <section>

                <h2>{currentQuestion.question}</h2>
                <ul><li className='list' onClick={() => { checkAnswer(options[0]) }} >{options[0]}</li>
                    <li className='list' onClick={() => { checkAnswer(options[1]) }} >{options[1]}</li>
                    <li className='list' onClick={() => { checkAnswer(options[2]) }}>{options[2]}</li>
                    <li className='list' onClick={() => { checkAnswer(options[3]) }} >{options[3]}</li></ul>
                <br />
                <button className='btn styles' onClick={getQuestion}>{status.status}</button>

            </section>
        </main>
    )



}