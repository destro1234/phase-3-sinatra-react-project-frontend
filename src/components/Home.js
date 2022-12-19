import React from 'react'
import DogWalkForm from './DogWalkForm.js'
import DogList from './DogList.js'
import Walk from './Walk.js'
import { BrowserRouter as Router, Routes,  Route, Redirect } from 'react-router-dom' 

function Home ({dogs}) {

    function handleClick(event) {
      {console.log(event)}
      
        
    }

    return(
        <div>
      <h1>Hello! Welcome to Maxwell's Dog Walks</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg"></img>
      <button onClick={handleClick}>Book a walk</button>

      <DogWalkForm/>
      <DogList dogs={dogs}/>
        </div>
    )
}

export default Home;