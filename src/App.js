import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' 

import './App.css';
import Home from './components/Home.js'
import Walk from './components/Walk.js'
function App() {

  const [ dogs, setDogs ] = useState([])

 

  useEffect(() => {
    fetch("http://localhost:9292/dogs")
    .then((r) => r.json())
    .then((data) => {
      setDogs(data)
    });
  }, [])

  

  // useEffect(() => {
  //   fetch("http://localhost:9292/walks")
  //   .then((r) => r.json())
  //   .then((data) => setAllWalks(data) )

  // }, [])


    


  
  return (
    <React.Fragment>

    <Router>
        <Routes>
          <Route path="/walks" element={<Walk dogs={dogs} setDogs={setDogs} />}></Route>
          <Route path="/" element={<Home />}></Route>

          
        </Routes>
      </Router>
      </React.Fragment>

      
    
  )
  
}

export default App;
