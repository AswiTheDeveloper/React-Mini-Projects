import React, { useState } from 'react'

export default function Accordion() {

    const [ans, setAns] = useState(true);
    return (

        <main>

            <Text title='one' check={true == ans} checkFun={() => { setAns(true) }}>

                <p>React Rocks</p>

            </Text>
            <Text title='two' check={false == ans} checkFun={() => { setAns(false) }} >

                <p>React Rocks</p>

            </Text>

        </main>


    )
}



function Text({ title, check, checkFun, children }) {

    return (

        <main>
            <h1>Heading {title}</h1>
            {
                (check) ? <p>{children}</p> : <button onClick={checkFun}>Show</button>
            }

        </main>
    )

}