import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import RecipeList from "./recipe-components/RecipeList";
import RecipeDetails from "./recipe-components/RecipeDetails";
import search from "./assets/Icons/Icon feather-search.png";
import Search from "./Search";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" component={RecipeDetails} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`http://starlord.hackerearth.com/recipe`);
      console.log(result.data);
      setItems(result.data);
      localStorage.setItem("myValueInLocalStorage", [
        result.data.map((a) => a.name),
      ]);
    };
    fetchItems();
  }, []);

  let names = localStorage.getItem("myValueInLocalStorage");
  names = names.slice(1,names.length - 1)
  names = names.split(',')
  console.log(names);

  useEffect(() => {
    const results = names.filter(person =>
      person.toLowerCase().includes(query)
    );
    setSearchResults(results);
  }, [query]);

  console.log(query);

  return (
    <div className='App-container'>
      <header className="App-header">
        <div className="search-bar">
          <div className='search-img'>
        <img src={search}></img>
        </div>
        <Search className='search-container' getQuery={(q) => setQuery(q)} />
        </div>
        <div className="site-title">
          <p>CATEGORY</p>
          <h2>Pizza and Noodles</h2>
        </div>
      </header>
      
      {/* <ul>
        {searchResults.map((item) => (
          <li>{item}</li>
        ))}
      </ul> */}
      <RecipeList items={items} isLoading={isLoading} search={query} />
    </div>
  );
};

export default App;
