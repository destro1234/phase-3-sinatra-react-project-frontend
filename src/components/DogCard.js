import React, { useState } from 'react'
import DogWalkForm from './DogWalkForm.js'

function DogCard ({dog}) {

    const [clicked, setClicked] = useState(false)

    function handleClick(event) {
        setClicked(!clicked)
      }
  
      function handleDelete(event, dog) {
          console.log(event)
          console.log(dog.id)
          fetch(`http://localhost:9292/dogs/${dog.id}`, {
              method: 'DELETE',
              })
              .then(res => res.json()) // or res.json()
            //   .then(res => console.log(res))
          }

          function handleDeleteWalk(event,walk) {
            console.log(event)
            fetch(`http://localhost:9292/walks/${walk.id}`, {
                method: 'DELETE',
            })
          }

          
    return (
        <div>
            <div className="card image-thumbnail">
                <h2>{dog.name}</h2>
                <img className="card-img-top" src={dog.image} alt="dog"></img>
                
                

                {clicked ? <DogWalkForm dog={dog} /> : null }

                
                
                <br></br>
                <p>{console.log(dog.walks)}</p>


                <div>
                    <h1>Walks:</h1>
                <ol>
                    {dog.walks.map((walk) => {
                        return (
                        <li>
                            <p>Start Time: {walk.starttime}</p>
                            <p>Walker: {walk.dogwalker}</p>
                            <p>Length: {walk.length} </p>
                            <button onClick={(event) => handleDeleteWalk(event, walk)}>Delete Walk</button>
                            </li>)
                    })}
                </ol>
                </div>

                <button  className="btn btn-primary" onClick={handleClick}>Book a walk</button>
                <button  className="btn btn-primary" onClick={(event) => handleDelete(event, dog)}>Remove Dog</button>


                </div>
                
        </div>
    )
}

export default DogCard;