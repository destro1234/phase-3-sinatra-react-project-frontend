import React, { useState } from 'react'

function AddDogForm({dogs, setDogs}) {

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [owner, setOwner] = useState("")
    const [image, setImage] = useState("")

    function addName(event) {
        setName(event.target.value)
    }

    function addAddress(event) {
        setAddress(event.target.value)
    }

    function addOwner(event) {
        setOwner(event.target.value)
    }

    function addImage(event) {
        setImage(event.target.value)
    }


    function handleSubmit(event) {
        event.preventDefault()
        let new_dog = {name: name, address: address, owner: owner, image: image}
        
        fetch("http://localhost:9292/dogs", {
            method: 'POST',
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(new_dog) ,
            })
            .then( r => r.json())
            .then(data => setDogs([...dogs, data] )

            )
        }
        
        return (
        <div className="text-center">
            <span>Walk hours are 7am to 11pm</span><br></br>
            <h3> Add a new dog: </h3>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input onChange={addName} type= "text" value={name} placeholder="dogname"></input>
                <label>Address: </label>
                <input onChange={addAddress} type="text" value={address} placeholder="address"></input>
                <label>Owner: </label>
                <input onChange={addOwner} type="text" value={owner} placeholder="owner"></input>
                <label>Picture: </label>
                <input onChange={addImage} type="text" value={image} placeholder="dog image"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddDogForm;
