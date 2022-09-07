import React from 'react';
import Card from './Card.jsx'
import style2 from './Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // props={cities}
  // tip, podés usar un map
  console.log("esto es style2", style2)
  return (
    <>
      <h1>CLIMAS</h1>
      <div className={style2.miClase}>
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
    </>
  )
};