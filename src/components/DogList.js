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
                <li>{dog.name}</li>
            ))}
        </ul>
        </div>
        
        // <ul>
        //     {dogs.map((dog) => (console.log(dog.name)))}
        // </ul>
        
            
        
)}

export default DogList;