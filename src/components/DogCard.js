import React, { useState } from 'react'
import DogWalkForm from './DogWalkForm.js'
import WalkCard from './WalkCard.js'

function DogCard ({dog, setWalks, dogs, setDogs}) {

    const [clicked, setClicked] = useState(false)

    
    function handleClick() {
        setClicked(!clicked)
      }
      
      function handleDeleteWalk(event, walk) {
        
        fetch(`http://localhost:9292/walks/${walk.id}`, {
            method: 'DELETE',
        })
        .then( r => r.json())
        .then( data => deleteWalk(data))
            // setWalks(dog.walks.filter( w => w.id !== data.id))) 
    }

    // fetch("http://localhost:9292/walks", {
    //                 method: 'POST',
    //                 headers: {
    //                 'Content-Type' : 'application/json'
    //                 },
    //                 body: JSON.stringify(new_walk) ,
    //                 })
    //                 .then( r => r.json())
                    
    //                 .then(data => { addWalk(data)
    //                     // setWalks([...walks, data])
    //                     })




    function handleDelete(event, dog) {
       fetch(`http://localhost:9292/dogs/${dog.id}`, {
            method: 'DELETE',
            })
            .then( r => (r.json()))
            .then( data => setDogs(dogs.filter( dog => dog.id !== data.id))) 
          }

    function deleteWalk(walk) {
        let index = dog.walks.findIndex((w) => { return w.id === walk.id})
        console.log(index)
        console.log(...dog.walks)
        let deletedWalk = dog.walks.splice(index, 1)
        console.log(...dog.walks)
        // const newWalks = [...dog.walks]
        console.log(deletedWalk)

        const filteredDogs = dogs.filter( d => {return d.id !== walk.dog_id})
        const newDogs = [...filteredDogs, dog]
        console.log(...filteredDogs, dog)
        setDogs(newDogs.sort((a, b) => { return a.id - b.id }))
    }

    
    
    function addWalk(walk) {
            const newWalks = [...dog.walks, walk]

            dog.walks = newWalks

            const filteredDogs = dogs.filter( d => {return d.id !== walk.dog_id})
            const newDogs = [...filteredDogs, dog]
            
            setDogs(newDogs.sort((a, b) => { return a.id - b.id }))
            setClicked(!clicked)
          }

          
    return (
        <div className="card">
            <div className="card-body">
            <div className="row">

            
                <div class="col-xs-6">

                    <h2>{dog.name}</h2>
                <img className="card-img-top image-thumbnail img-fluid" style={{width: 250}} src={dog.image} alt="dog"></img>
                
                {clicked ? <DogWalkForm dog={dog} setWalks={setWalks} walks={dog.walks} addWalk={addWalk} /> : null }
                <br></br>
                </div>
                
                
                

                
                <div class="col-xs-6" style={{margin: 50}}>
                    <h4>Walks:</h4>

                    {
                
                    dog.walks ? dog.walks.map((walk) => {
                        
                        return (
                        
                        <WalkCard key={walk.id} walk={walk} dog={dog} walks={dog.walks} setWalks={setWalks} dogs={dogs} handleDeleteWalk={handleDeleteWalk}/>

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