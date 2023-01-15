import React, { useState } from 'react'
import EditDogWalkForm from './EditDogWalkForm.js'

function WalkCard({ walk, handleDeleteWalk, dog, dogs, setDogs }) {

    const [ editClicked, setEditClicked] = useState(false)
    
    function showForm() {
        setEditClicked(!editClicked)
      }
  
    return (
        <div>
            <p>Start Time: {walk.starttime}</p>
            <p>Walker: {walk.dogwalker}</p>
            <p>Length: {walk.length} </p>

            <button onClick={(event) => handleDeleteWalk(event, walk)}>Delete Walk</button>
            <button onClick={(event) => showForm(event)}>Edit Walk</button>
                            
            { editClicked ? <EditDogWalkForm walk={walk} dog={dog} dogs={dogs} setDogs={setDogs} /> : null}

        </div>
    )
}
export default WalkCard;