import './calendar.css'
import React, { useEffect, useState, useRef } from 'react';

let year = year = prompt('Enter Year', 2022),
    monthName,
    yearInHtml,
    month = month = prompt('Enter Month(number)', 12),
    MonthArray = ["January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];


export default function Calendar() {

    const sectionRef = useRef(0);
    const dataRef = useRef(0);
    const [task, setTask] = useState({
        events: []
    });


    useEffect(() => {
        sectionRef.current.innerHTML = '';
        dataRef.current = {
            prev: new Date(year, month - 1, 0),
            current: new Date(year, month - 1),
            currentLastDate: new Date(year, month, 0)
        };

        let currentMonthStartDate = 1;
        let nextMonthStartDate = 1;
        for (let i = 1; i < 43; i++) {
            let article = document.createElement('article')
            if (i < dataRef.current.current.getDay()) {
                let prevMonthLastDate = dataRef.current.prev.getDate();
                let currentMonthStartDay = dataRef.current.current.getDay();
                article.innerHTML = prevMonthLastDate - currentMonthStartDay + i + 1;
                article.style.color = 'lightgray'

            }
            else {
                if (currentMonthStartDate > dataRef.current.currentLastDate.getDate()) {
                    article.innerHTML = nextMonthStartDate++;
                    article.style.color = 'lightgray';


                }

                else {
                    article.innerHTML = currentMonthStartDate++;
                    article.addEventListener('click', (e) => {
                        let temp = prompt('Enter Event.?', 'Finish to Read the Book');
                        setTask({
                            events: [...task.events, {
                                date: article.innerText + '/' + month + '/' + year,
                                time: new Date().toLocaleTimeString(),
                                task1: temp
                            }]
                        })


                    });
                }
            }
            sectionRef.current.append(article);
        }
        monthName = document.querySelector('.calendar h1 h2');
        yearInHtml = document.querySelector('.calendar h1 h3');

        monthName.innerHTML = MonthArray[month - 1];
        yearInHtml.innerHTML = year;
    }, [task.events])



    function changeColor(e) {

        document.querySelectorAll('article').forEach((a, b) => {
            if (e == a.innerText) {
                a.style.backgroundColor = "red"
                console.log(a);


            }
        })
    }


    return (

        <main className='calendar'>
            <header>
                <section><h2>Today</h2>
                    <p>{MonthArray[new Date().getMonth()].toUpperCase()}-{new Date().getFullYear()}</p>
                    <h1>{new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()}</h1></section>
            </header>
            <main>


                <section>
                    <h1><h2></h2>
                        <h3></h3>
                    </h1>

                    <section>
                        <article>MON</article>
                        <article>TUE</article>
                        <article>WED</article>
                        <article>THU</article>
                        <article>FRI</article>
                        <article>SAT</article>
                        <article>SUN</article>
                    </section>
                    <section ref={sectionRef}></section>
                </section>
                <aside>

                    <ul>
                        {(task.events.length != 0) ? task.events.map((e, i) => {
                            return <li key={i}><h4>{e.task1}</h4>
                                <p>{e.time} {e.date}</p>
                            </li>
                        }) : <h5>Select a date to Add a Reminder</h5>
                        }

                    </ul>
                </aside>
            </main>
        </main>
    )
}