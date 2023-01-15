import React  from 'react'
import DogCard from './DogCard.js'
import AddDogForm from './AddDogForm.js'



function Walk({dogs, setDogs, setWalks, walks}) {

// console.log(walks)

  const walkers = [
    {name: "Max", image: "https://i.ytimg.com/vi/Cbtkoo3zAyI/maxresdefault.jpg"},
    {name: "Natanael", image: "https://media.gettyimages.com/id/1296390144/photo/man-walking-a-labrador-retriever-dog.jpg?s=612x612&w=gi&k=20&c=_mKCWsc1iMh1axW3W8mggGK2b700JFxgDFx_5lOjqhU="},
    {name: "Kevin", image: "https://as1.ftcdn.net/v2/jpg/00/31/99/94/1000_F_31999482_2I5NDUN03nMQK9YpxaIkRZmWYvrXMTCE.jpg"}
  ]

  
  

  
      
      return (
      <div>
        <h1 className="text-center">Welcome to the Walks Page!</h1>

        <br></br>
        <br></br>

        <h4 className="text-center">Meet the Walkers:</h4>
        <div className="row row-cols-1 row-cols-md-4 g-4 d-flex justify-content-center">
        {
            walkers.map((walker) => (
                <div key={walker.name} className="card image-thumbnail" style={{width: 200, margin: 50}}>
                    
                        <h1 className="text-center">{walker.name}</h1>
                        <img className="card-img-top" src={walker.image} alt={"..."}></img>
                    
                </div>
            ))
          }
          
        
          
        
        <AddDogForm setDogs={setDogs} dogs={dogs}/>
          {console.log(dogs)}
        <br></br>
        <br></br>

        <div>
          
        <h1 className="text-center">These are the dogs</h1>
        <div className="card">
            {dogs ? dogs.map( (dog) => (
                <div className="card-body">

                  <DogCard key={dog.id} dog={dog} setDogs={setDogs} setWalks={setWalks} walks={walks}  dogs={dogs}/>
                              
                  </div>
            )) : null }
            
        </div>
        
        </div>
        </div>
      </div>
      
    );
}

export default Walk;