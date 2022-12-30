import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes,  Route, Redirect } from 'react-router-dom' 

import './App.css';
import Home from './components/Home.js'
import Walk from './components/Walk.js'
function App() {

  const [ allDogs, setAllDogs ] = useState([])
  const walkers = [
    {name: "Max", image: "https://i.ytimg.com/vi/Cbtkoo3zAyI/maxresdefault.jpg"},
    {name: "Natanael", image: "https://media.gettyimages.com/id/1296390144/photo/man-walking-a-labrador-retriever-dog.jpg?s=612x612&w=gi&k=20&c=_mKCWsc1iMh1axW3W8mggGK2b700JFxgDFx_5lOjqhU="},
    {name: "Kevin", image: "https://as1.ftcdn.net/v2/jpg/00/31/99/94/1000_F_31999482_2I5NDUN03nMQK9YpxaIkRZmWYvrXMTCE.jpg"}
  ]

  useEffect(() => {
    fetch("http://localhost:9292/dogs")
    .then((r) => r.json())
    .then((data) => setAllDogs(data));
  }, [])
    

  
  console.log(allDogs)


  
  return (
    <React.Fragment>

    <Router>
        <Routes>
          <Route path="/walks" element={<Walk dogs={allDogs} walkers={walkers} setDogs={setAllDogs}/>}></Route>
          <Route path="/" element={<Home dogs={allDogs}/>}></Route>

          
        </Routes>
      </Router>

      
      
      {/* <Header/>
      <DogWalkForm/>
      <DogList dogs={allDogs}/> */}
    </React.Fragment>

      
    
  )

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  
}

export default App;
