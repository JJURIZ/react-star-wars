import axios from "axios";
import Starships from "./components/Starships";
import StarshipDetails from "./components/StarshipDetails";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import "./style.scss";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [starships, setStarships] = useState([]);

    const getStarships = async function() {
      setIsLoaded(true);
      console.log('is this on?')
    try {
    const results1 = await axios.get('http://swapi.dev/api/starships/');
    const list1 = results1.data.results;
    const results2 = await axios.get('http://swapi.dev/api/starships/?page=2');
    const list2 = results2.data.results;
    const results3 = await axios.get('http://swapi.dev/api/starships/?page=3');
    const list3 = results3.data.results;
    const results4 = await axios.get('http://swapi.dev/api/starships/?page=4');
    const list4 = results4.data.results;
    const masterList = list1.concat(list2, list3, list4);
    setStarships(masterList);
    }
      catch(err) {
        setIsLoaded(false);
        setError(err);
      }
  };
  useEffect(() => {
    getStarships();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <BrowserRouter>
        <div className="App">
          <h1 className="star-wars-header">Star Wars Ships</h1>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Starships starships={starships} />}
            />
            <Route
              path="/starship"
              exact
              render={({ location }) => <StarshipDetails location={location} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
