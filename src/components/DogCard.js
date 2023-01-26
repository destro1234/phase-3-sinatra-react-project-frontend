import React, { useState } from 'react'
import DogWalkForm from './DogWalkForm.js'
import WalkCard from './WalkCard.js'

function DogCard ({dog, dogs, setDogs}) {

    const [clicked, setClicked] = useState(false)
    
    function handleClick() {
        setClicked(!clicked)
      }

      function handleDelete(event, dog) {
        console.log(dog)
       fetch(`http://localhost:9292/dogs/${dog.id}`, {
            method: 'DELETE',
            })
            .then( r => (r.json()))
            .then( data => setDogs(dogs.filter( dog => dog.id !== data.id))) 
          }
      
    function handleDeleteWalk(event, walk) {
        fetch(`http://localhost:9292/walks/${walk.id}`, {
            method: 'DELETE',
        })
        .then( r => r.json())
        .then( data => deleteWalk(data)) 
    }

    

    function deleteWalk(walk) {
        let index = dog.walks.findIndex((w) => { return w.id === walk.id})
        dog.walks.splice(index, 1)
        const newDogs = [...dogs]
        setDogs(newDogs)
    }
    
    function addWalk(walk) {
        if (dog.walks) {
           let newWalks = [...dog.walks, walk] 
           dog.walks = newWalks
        }

        else {
            dog.walks = [walk]
        }
        setDogs(dogs.sort((a, b) => { return a.id - b.id }))
        setClicked(!clicked)
          }

          
    return (
        <div className="card">
            <div className="card-body">
            <div className="row">

            
                <div className="col-xs-6">

                    <h2>{dog.name}</h2>
                <img className="card-img-top image-thumbnail img-fluid" style={{width: 250}} src={dog.image} alt="dog"></img>
                
                {clicked ? <DogWalkForm dog={dog} addWalk={addWalk} /> : null }
                <br></br>
                </div>
           
                <div className="col-xs-6" style={{margin: 50}}>
                    <h4>Walks:</h4>

                    {
                
                    dog.walks ? dog.walks.map((walk) => {
                        
                        return (
                        
                        <WalkCard key={walk.id} walk={walk} dog={dog} dogs={dogs} handleDeleteWalk={handleDeleteWalk} setDogs={setDogs}/>

                            )
                    
                    }) : null}
                    
                    </div>                
                </div>

                <button  className="btn btn-primary" onClick={handleClick}>Book a walk</button>
                <button  className="btn btn-primary" onClick={(event) => handleDelete(event, dog)}>Remove Dog</button>
                
                </div>
        </div>
    )
}

export default DogCard;