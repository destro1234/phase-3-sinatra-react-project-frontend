import React from 'react'
import DogList from './DogList.js'
import AddDogForm from './AddDogForm.js'



function Walk({dogs, setDogs}) {

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
                <div className="card image-thumbnail" style={{width: 200, margin: 50}}>
                    
                        <div className="text-center">{walker.name}</div>
                        <img className="card-img-top" src={walker.image}></img>
                    
                </div>
            ))
          }
        
        <AddDogForm setDogs={setDogs} dogs={dogs}/>

        <DogList dogs={dogs}/>
        </div>
      </div>
      
    );
}

export default Walk;