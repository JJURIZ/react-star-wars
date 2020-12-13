import axios from 'axios';
import Starships from './components/Starships';
import { useState, useEffect } from 'react'

import './App.css';
import './style.scss';

function App() { 
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [starships, setStarships] = useState([]);


  const handleSubmit = () => {
    axios.get(`https://swapi.dev/api/starships/`)
      .then(
        (results) => {
          setIsLoaded(true);
          setStarships(results.data.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )}
      useEffect(() => {
        handleSubmit()
    
  },[])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
    <Starships starships={starships}/> 
    )
  }
}
export default App;