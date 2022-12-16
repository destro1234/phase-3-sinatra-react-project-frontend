import React, { useState } from 'react'

function DogWalkForm() {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [owner, setOwner] = useState("")
    const [temperament, setTemperament] = useState("")

    function addName(event) {
        setName(event.target.value)
    }

    function addAge(event) {
        setAge(event.target.value)
    }

    function addOwner(event) {
        setOwner(event.target.value)
    }

    function addTemperament(event) {
        setTemperament(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        let new_dog = {name: name, age: age, owner: owner, temperament: temperament}
        
        fetch("http://localhost:9292/dogs", {
            method: 'POST',
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(new_dog) ,
            })
            .then( r => r.json())
            .then(data => {debugger} )
        }
    

    

    return (
        <div>
            <h1>Add Your Dog here: </h1>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input onChange={addName} type= "text" value={name} placeholder="dogname"></input>
                <label>Age: </label>
                <input onChange={addAge} type="integer" value={age} placeholder="age"></input>
                <label>Owner: </label>
                <input onChange={addOwner} type="text" value={owner} placeholder="owner"></input>
                <label>Temperament: </label>
                <input onChange={addTemperament} type="text" value={temperament} placeholder="temperament"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default DogWalkForm;