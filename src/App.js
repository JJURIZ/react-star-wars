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

  const getStarships = () => {
    axios.get(`https://swapi.dev/api/starships/`).then(
      (results) => {
        setIsLoaded(true);
        setStarships(results.data.results);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
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
