import React, { useState } from 'react'
import Button from '../Navbar/Button'

const App = () => {
    const [a, setA] = useState(0)
    const [person, setPerson] = useState({
        name: "shreyansh",
        age: 21,
        city: "delhi"
    })

    const [newPerson, setNewPerson] = useState({ ...person })

    function increment() {
        setA(a + 1)
        console.log(a)
    }
    function decrement() {
        setA(a - 1)
        console.log(a)
    }
    return (
        <div>
            <h>{a}</h><br />
            <Button bg="green" text="increment" onClick={increment}>
            </Button>
            <br />
            <Button bg="blue" text="decrement" onClick={decrement}>
            </Button>
            <br />
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.city}</h3>
            <h3>{newPerson.name}</h3>


        </div>
    )
}

export default App