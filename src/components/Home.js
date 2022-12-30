import React from 'react'
import { useNavigate} from 'react-router-dom' 

function Home ({dogs}) {

  const navigate = useNavigate()

    function handleClick(event) {
      navigate("/walks")
        
    }

    return(
        <div class="card">
      <h1 class="text-center">Hello! Welcome to Maxwell's Dog Walks</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg" alt="pic of dog"></img>
      <button  className="btn btn-primary" onClick={handleClick}>Book a walk</button>

      {/* <DogWalkForm/> */}
      {/* <DogList dogs={dogs}/> */}
        </div>
    )
}

export default Home;