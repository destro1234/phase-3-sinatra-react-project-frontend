import React, { useState } from 'react'

function DogWalkForm({dog, addWalk}) {

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
        fetch("http://localhost:9292/walks", {
                    method: 'POST',
                    headers: {
                    'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(new_walk) ,
                    })
                    .then( r => r.json())
                    
                    .then(data => { addWalk(data)
                        // setWalks([...walks, data])
                        })

            
                
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

