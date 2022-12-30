import React, { useState } from 'react'
import DogWalkForm from './DogWalkForm.js'


function DogList({dogs}){

    const [clicked, setClicked] = useState(false)

    function handleClick(event) {
      setClicked(!clicked)
    }

    function handleDelete(event, dog) {
        console.log(event)
        console.log(dog)
        // fetch(`http://localhost:9292/dogs/${dog.id}`, {
        //     method: 'DELETE',
        //     headers: {
        //     'Content-Type' : 'application/json'
        //     }
        //     })
        //     .then(res => res.text()) // or res.json()
        //     .then(res => console.log(res))
        }
    


    return (

        <div>
        <h1 className="text-center">These are the dogs</h1>
        <ul>
            {dogs.map( (dog) => (
                <div>
                <li>{dog.name}</li>
                <img src={dog.image} alt="dog"></img>
                
                {clicked ? <DogWalkForm dog={dog}/> : null }
                <br></br>
                <button  className="btn btn-primary" onClick={handleClick}>Book a walk</button>
                <button  className="btn btn-primary" onClick={handleDelete({dog})}>Remove Dog</button>


                </div>
            ))}
        </ul>
        
        </div>
        
        // <ul>
        //     {dogs.map((dog) => (console.log(dog.name)))}
        // </ul>
        
            
        
)}

export default DogList;