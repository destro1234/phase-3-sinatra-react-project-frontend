import React, { useState } from 'react'

function DogWalkForm({dog}) {

    const [dogWalker, setDogWalker] = useState("")
    const [startTime, setStartTime] = useState("")
    const [length, setLength ] = useState("")

    


    function addDogWalker(event) {
        setDogWalker(event.target.value)
    }

    function addStartTime(event) {
        setStartTime(event.target.value)
    }

    function addLength(event) {
        setLength(event.target.value)
    }



    function handleSubmit(event) {
        event.preventDefault()
        let new_walk = { dogwalker: dogWalker, starttime: startTime, length: length, dog_id: dog.id }
        console.log(new_walk)
        
        fetch("http://localhost:9292/walks", {
            method: 'POST',
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(new_walk) ,
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // Do something with data
            })

            // fetch('http://localhost:9292/walks')
            // .then(function (response) {
            //     return response.json();
            // })
            // .then(function (data) {
            //     // Do something with data
            // })
        }
    

    

    return (
        <div>

        
          
            
        <form>
          <h3> Add a new Walk: </h3>
          <label>DogWalker: </label>
          <input onChange={addDogWalker} type="text" placeholder="dogwalker"></input>
          <label>Start Time: </label>
          <input onChange={addStartTime} type="time" placeholder="starttime"></input>
          <label>length: </label>
          <input onChange={addLength} type="text" placeholder="length"></input>
          <button onClick={handleSubmit} type="submit">Submit</button>
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
