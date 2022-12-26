import React from 'react'

function DogList({dogs}){
    console.log(dogs)
    // dogs.forEach((dog) => {
    //     console.log(dog.name)
    // })
    return (

        <div>
        <h1>These are the dogs</h1>
        <ul>
            {dogs.map( (dog) => (
                <div>
                <li>{dog.name}</li>
                <img src={dog.image}></img>
                </div>
            ))}
        </ul>
        </div>
        
        // <ul>
        //     {dogs.map((dog) => (console.log(dog.name)))}
        // </ul>
        
            
        
)}

export default DogList;