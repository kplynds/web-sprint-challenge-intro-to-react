import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CharacterList from './components/CharacterList';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [swData, setSwData] = useState([])
  console.log(swData)

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
      .then(res => {
        console.log(res.data.results)
        setSwData(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars!</h1>
      <CharacterList charactersArray={swData}/>
    </div>
  );
}

export default App;
