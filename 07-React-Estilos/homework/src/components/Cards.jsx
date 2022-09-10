import React from 'react';
import Card from './Card.jsx'
import style2 from './Cards.module.css'
export default function Cards({cities, onClose}) {
  // acá va tu código
  // props={cities}
  // tip, podés usar un map
  return (
    <>
      <h1 className={style2.titulo}>Climas del mundo</h1>
      <div className={style2.miClase}>
      {
        cities.map(ciudad=>
         <Card 
          id={ciudad.id}
          key={ciudad.id}
          max={ciudad.main.temp_max}
          min={ciudad.main.temp_min}
          name={ciudad.name}
          wind={ciudad.wind.speed}
          img={ciudad.weather[0].icon}
          onClose={() => onClose(ciudad.id)}
         />)
      }
      </div>
    </>
  )
};