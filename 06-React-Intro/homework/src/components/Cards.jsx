import React from 'react';
import Card from './Card.jsx'

export default function Cards(props) {
  // acá va tu código
  // props={cities}
  // tip, podés usar un map
  return (
  <div>
  {
    props.cities.map(ciudad=>
      <Card 
      key={ciudad.id}
      max={ciudad.main.temp_max}
      min={ciudad.main.temp_min}
      name={ciudad.name}
      img={ciudad.weather[0].icon}
      onClose={() => alert(ciudad.name)}
      />)
  }
  </div>
  )
};