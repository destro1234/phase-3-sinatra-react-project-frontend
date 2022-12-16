import React, { useState, useEffect } from 'react'
import './App.css';
import DogWalkForm from './components/DogWalkForm.js'
import DogList from './components/DogList.js'
function App() {

  const [ allDogs, setAllDogs ] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/dogs")
    .then((r) => r.json())
    .then((data) => setAllDogs(data));
  }, [])
    

  function Header() {
    return (
      <h1>Hello! Welcome to Maxwell's Dog Walks</h1>
    )
  }

  function Dogs() {
    console.log(allDogs)
    
  }

  
  return (
    <React.Fragment>
      <Header/>
      <DogWalkForm/>
      <DogList dogs={allDogs}/>
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
