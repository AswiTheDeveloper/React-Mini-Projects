import React, { useRef, useState } from 'react';
import './calendar.css'

let Count;

export default function StopWatch() {
    const [play, setPlay] = useState(false);
    const [lap, setLap] = useState([]);
    const [count, setCount] = useState({
        min: 0,
        sec: 0,
        milsec: 0
    });
    const [show, setShow] = useState([]);

    function startCount() {
        let startDate = new Date();
        console.log(startDate);
        setCount(0);


        Count = setInterval(() => {
            let temp = ((new Date().getTime() - startDate.getTime()));
            console.log(temp)
            let min = Math.trunc(temp / (1000 * 60));
            temp = temp % (1000 * 60);
            let sec = Math.trunc(temp / 1000);
            temp = temp % 1000;
            let milsec = Math.trunc(temp / 10);

            setCount({
                min: min,
                sec: sec,
                milsec: milsec
            });
            console.log(min, sec, milsec);

        }, 100)

        setPlay(!play);
    }


    function pauseCount() {
        clearInterval(Count);
        setLap([...lap, count]);
        setPlay(!play);


    }
    function resetCount() {
        clearInterval(Count);
        setCount({
            min: 0,
            sec: 0,
            milsec: 0
        })
    }
    return (

        <main className='watch'>

            <aside>


                <section> <h4>TIMER</h4>
                    <h1>Personal Project</h1></section>
                <article><h1>{count.min < 10 ? '0' + count.min : count.min}</h1>:<h1>{count.sec < 10 ? '0' + count.sec : count.sec}</h1>:<h1>{count.milsec < 10 ? '0' + count.milsec : count.milsec}</h1>      <img className='start' onClick={play ? pauseCount : startCount} src={
                    play ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Mrb_-DQhyDT0OCquO88GEFp__m322dpBp_li2MAc01RQjnyB5_g4UC0rSuCWmgjIBTw&usqp=CAU' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSakQq9nNC4fW_lS4e2K3ZbJ57VhQOX-tpaLcl1BLgfPFv3601GLLTHGrW65XC-gw1FnRk&usqp=CAU'}


                />
                </article>
                <section>
                    {/* <button onClick={pauseCount}>Stop</button>
                    <button onClick={resetCount}>Reset</button> */}

                    {
                        (lap && <ul>

                            {
                                lap.map((e, i) => {
                                    return <li>Lap {i + 1} - {e.min}:{e.sec}:{e.milsec}</li>
                                })
                            }


                        </ul>
                        )
                    }
                </section>
            </aside>



        </main>
    )
}