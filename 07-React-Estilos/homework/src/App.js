import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import {Route} from 'react-router-dom';
import About from './components/About.jsx';
import Ciudad from './components/Ciudad.jsx';

function App(){
  const [cities, setCities] = useState([]);//inicializo cities en []
  
  const apiKey='4ae2636d8dfbdc3044bede63951a019b';//obtenido del readme

  const onSearch=(ciudad)=>{
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
  .then((response)=>{//luego de que se encuentre lo buscado en la Api,
  // ejecuta el siguiende callback
      setCities((oldCities)=>[...oldCities,response.data]);
    });
  }
  
  function onClose(id){
    setCities(oldCities => 
      oldCities.filter(city=>city.id !== id));
  }

  return (
    <div className='App'>
      <Route path ='/' render={()=> <Nav onSearch={onSearch}/>}/>
      <Route path='/about' component={About}/>
      <Route exact path ='/'render={()=><Cards cities={cities} onClose={onClose}/>}/>
      <Route exact path='/ciudad/:ciudadId' render={({match})=><Ciudad 
      ciudad={cities.filter(
        (city => city.id === parseInt(match.params.ciudadId)))[0]}
      />}
      />
    </div>
  );
}

export default App;
