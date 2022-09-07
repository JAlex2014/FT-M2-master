import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';
import style1 from './components/Card.module.css';

function App() {
  return (
    <div className={`App ${style1.App}`} >
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
      <div>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div>
      <hr />
      <div>
        <Cards
          cities={data}
        />
      </div>
      <hr />
     
    </div>
  );
}

export default App;
