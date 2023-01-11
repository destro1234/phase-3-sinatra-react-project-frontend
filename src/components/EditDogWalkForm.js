import React, { useState } from 'react'

function EditDogWalkForm({walk, setWalks, walks}) {

    const [dogWalker, setDogWalker] = useState("")
    const [startTime, setStartTime] = useState("")
    const [length, setLength ] = useState("")

    function changeDogWalker(event) {
        setDogWalker(event.target.value)
        console.log(dogWalker)
    }

    function changeStartTime(event) {
        setStartTime(event.target.value)
        console.log(startTime)
    }

    function changeLength(event) {
        setLength(event.target.value)
        console.log(length)
    }

    function handleUpdate (event) {
        
        event.preventDefault()
        console.log(event)
        

        fetch(`http://localhost:9292/walks/${walk.id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type' : 'application/json'
                },
                body: (JSON.stringify({
                    dogwalker: dogWalker, 
                    starttime: startTime, 
                    length: length
                })) ,
                
                })
                .then( r => (r.json()))
                .then(data => {
                    
                    setWalks(walks.map((w) => {
                        if (w.id === walk.id) {
                            return data
                        } else {
                            return w
                        }
                    }))
                    })
    

}

    
    return (
        <form>
          <h3> Edit Walk: </h3>
          <label>DogWalker: </label>
          <input onChange={changeDogWalker} type="text" placeholder="dogwalker"></input>
          <label>Start Time: </label>
          <input onChange={changeStartTime} type="time" placeholder="starttime"></input>
          <label>length: </label>
          <input onChange={changeLength} type="text" placeholder="length"></input>
          <button onClick={(event) => handleUpdate(event)} type="submit">Submit</button>
        </form>
    )
}

export default EditDogWalkForm;