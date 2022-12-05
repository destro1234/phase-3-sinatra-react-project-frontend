// import logo from './logo.svg';
import React from 'react'
import './App.css';
import DogWalkForm from './components/DogWalkForm.js'
function App() {


  
    fetch("http://localhost:9292/dogs")
    .then((r) => r.json())
    .then((data) => console.log(data));
 

  function Header() {
    return (
      <h1>Hello! Welcome to Maxwell's Dog Walks</h1>
    )
  }

  
  return (
    <React.Fragment>
      <Header/>
      <DogWalkForm/>
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
