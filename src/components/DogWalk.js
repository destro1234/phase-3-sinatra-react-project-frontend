import React, { useState } from 'react'



function DogWalk() {
    const [dogname, setDogname] = useState("")
    const [dogWalker, setDogWalker] = useState("")
    const [dogWalk, setDogWalk] = useState("")

    console.log(dogname)
    console.log(dogWalker)
    console.log(dogWalk)

    function addName(event) {
        setDogname(event.target.value)
    }

    function addDogWalker(event) {
        setDogWalker(event.target.value)
    }

    function addWalk(event) {
        setDogWalk(event.target.value)
    }

    return (
      <div>
        <form>
          <label>Dog </label>
          <input onChange={addName} type= "text" value={dogname} placeholder="dogname"></input>
          <label>DogWalker: </label>
          <input onChange={addDogWalker} type="text" placeholder="dogwalker"></input>
          <label>Start Time: </label>
          <input onChange={addWalk} type="text" placeholder="starttime"></input>
          <label>End Time: </label>
          <input type="text" placeholder="endtime"></input>
          <button type="submit">Submit</button>
        </form>
        <div>This is a DogWalk</div>
      </div>
      
    );
}

export default DogWalk;