import React, { useState } from 'react'

function EditDogWalkForm({walk, dog, dogs, setDogs}) {

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
                    editWalk(data)
                    })

                   
    

}

    function editWalk(walk) {
        // const editedWalk = dog.walks.find((w) => { return w.id === walk.id})
        const filteredWalks = dog.walks.filter( w => { return w.id !== walk.id})
        const newWalks = [...filteredWalks, walk]
        dog.walks = newWalks
        const newDogs = [...dogs]
        setDogs(newDogs.sort((a, b) => { return a.id - b.id }))

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