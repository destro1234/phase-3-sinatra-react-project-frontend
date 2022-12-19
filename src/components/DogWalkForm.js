import React, { useState } from 'react'

function DogWalkForm() {

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [owner, setOwner] = useState("")
    const [temperament, setTemperament] = useState("")

    function addName(event) {
        setName(event.target.value)
    }

    function addAddress(event) {
        setAddress(event.target.value)
    }

    function addOwner(event) {
        setOwner(event.target.value)
    }

    function addTemperament(event) {
        setTemperament(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        let new_dog = {name: name, address: address, owner: owner}
        
        fetch("http://localhost:9292/dogs", {
            method: 'POST',
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(new_dog) ,
            })
            .then( r => r.json())
            .then(data => console.log(data ) )
        }
    

    

    return (
        <div>
            <span>Walk hours are 9am to 6pm</span><br></br>
            <h3> Add a new dog: </h3>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input onChange={addName} type= "text" value={name} placeholder="dogname"></input>
                <label>Address: </label>
                <input onChange={addAddress} type="integer" value={address} placeholder="address"></input>
                <label>Owner: </label>
                <input onChange={addOwner} type="text" value={owner} placeholder="owner"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default DogWalkForm;

/* <h1>New Walk</h1>

<h3>Add a new dog:</h3>

<label for="dog[name]">Dog: </label>
<input type="text" name="dog[name]" value="">

<label for="dog[owner_name]">Owner: </label>
<input type="text" name="dog[owner_name]" value="">

<label for="dog[address]">Address: </label>
<input type="text" name="dog[address]" value=""><br><br>

<label for="walk[date]">Date: </label>
<input type="date" name="walk[date]" value="" min="2019-01-01" max="2019-31-12" required><br>

<label for="walk[pickup_time]">Pickup Time: </label>
<input type="time" id="pickup_time" name="walk[pickup_time]" value="" min="9:00" max="18:00">

<span>Walk hours are 9am to 6pm</span><br>

<label for="length">Length of walk,15 or 30mins: </label>
<input type="text" name="walk[length]" value="">mins<br>

<input type="submit" name="submit" value="Submit"> */
