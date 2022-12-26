import React, { useState } from 'react'
import DogList from './DogList.js'
import DogWalkForm from './DogWalkForm.js'



function Walk({dogs}) {
    const [dogname, setDogname] = useState("")
    const [dogWalker, setDogWalker] = useState("")
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")


    console.log(dogname)
    console.log(dogWalker)
    console.log(startTime)
    console.log(endTime)

    function addName(event) {
        setDogname(event.target.value)
    }

    function addDogWalker(event) {
        setDogWalker(event.target.value)
    }

    function addStartTime(event) {
        setStartTime(event.target.value)
    }

    function addEndTime(event) {
        setEndTime(event.target.value)
    }

    return (
      <div>
        <h1>Welcome to the walks page!</h1>
        <DogWalkForm/>
        <DogList dogs={dogs}/>
        {/* <form>
          <h3> Add a new Dog: </h3>
          <label>Dog: </label>
          <input onChange={addName} type= "text" value={dogname} placeholder="dogname"></input>
          <label>DogWalker: </label>
          <input onChange={addDogWalker} type="text" placeholder="dogwalker"></input>
          <label>Start Time: </label>
          <input onChange={addStartTime} type="time" placeholder="starttime"></input>
          <label>End Time: </label>
          <input onChange={addEndTime} type="time" placeholder="endtime"></input>
          <button type="submit">Submit</button>
        </form> */}
        <div>This is a DogWalk</div>
      </div>
      
    );
}

export default Walk;