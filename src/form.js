import React, { useState } from 'react'

export default function Form() {
    const [userData, setUserData] = useState({
        name: '',
        phone: '',
        place: ''
    });

    return (

        <main>
            <GoogleForm data={userData} updateState={(e) => setUserData(e)} />

            <p>name:{userData.name}</p>
            <p>phone:{userData.phone}</p>
            <p>place:{userData.place}</p>

        </main>

    )
}



function GoogleForm({ data, updateState }) {

    function updateData(e) {


        e.preventDefault();
        let form = document.querySelectorAll('form input');
        let check = Array.from(form).every((e, i) => e.value != '');

        if (check) {

            let data = {
                name: form[0].value,
                phone: form[1].value,
                place: form[2].value
            }
            updateState(data);
        }
    }
    return (
        <form>
            <input name='name' placeholder='your name' />
            <input name='phone' placeholder='phone' type='number' />
            <input name='place' placeholder='place' />
            <button onClick={(e) => { updateData(e) }}>save</button>
        </form>
    )
}





