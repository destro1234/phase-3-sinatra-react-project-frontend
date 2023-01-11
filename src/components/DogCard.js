import React, { useEffect, useState } from 'react'
import DogWalkForm from './DogWalkForm.js'
import WalkCard from './WalkCard.js'

function DogCard ({dog, setWalks, walks, dogs, handleDelete}) {

    const [clicked, setClicked] = useState(false)
    const [thisDogsWalks, setThisDogsWalks ] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/dogs/${dog.id}/walks`)
        .then( r => r.json())
        .then( data => setThisDogsWalks(data))
    }, [dog.id])

    function handleClick() {
        setClicked(!clicked)
      }

      function handleDeleteWalk(event, walk) {
        
        fetch(`http://localhost:9292/walks/${walk.id}`, {
            method: 'DELETE',
        })
        .then( r => r.json())
        .then( data => setWalks(walks.filter( w => w.id !== data.id))) 
    }

    // let this_dogs_walks = walks.filter((w) => { return w.dog_id === dog.id})

          
    return (
        <div className="card">
            <div className="card-body">
            <div className="row">

            
                <div class="col-xs-6">

                    <h2>{dog.name}</h2>
                <img className="card-img-top image-thumbnail img-fluid" style={{width: 250}} src={dog.image} alt="dog"></img>
                
                {clicked ? <DogWalkForm dog={dog} setWalks={setWalks} walks={walks} /> : null }
                <br></br>
                </div>
                
                
                

                
                <div class="col-xs-6" style={{margin: 50}}>
                    <h4>Walks:</h4>

                    {
                
                    thisDogsWalks.map((walk) => {
                        
                        return (

                            
                        
                            
                            <WalkCard key={walk.id} walk={walk} dog={dog} walks={walks} setWalks={setWalks} dogs={dogs} handleDeleteWalk={handleDeleteWalk}/>

                            )
                    
                    })}
                    
                    
                    </div>

                

                

                    
                
                </div>

                <button  className="btn btn-primary" onClick={handleClick}>Book a walk</button>
                <button  className="btn btn-primary" onClick={(event) => handleDelete(event, dog)}>Remove Dog</button>
                
                </div>
        </div>
    )
}

export default DogCard;