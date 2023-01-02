import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' 

import './App.css';
import Home from './components/Home.js'
import Walk from './components/Walk.js'
function App() {

  const [ allDogs, setAllDogs ] = useState([])
 

  useEffect(() => {
    fetch("http://localhost:9292/dogs")
    .then((r) => r.json())
    .then((data) => setAllDogs(data));
  }, [])
    


  
  return (
    <React.Fragment>

    <Router>
        <Routes>
          <Route path="/walks" element={<Walk dogs={allDogs} setDogs={setAllDogs}/>}></Route>
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
