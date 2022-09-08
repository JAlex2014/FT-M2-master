import React from 'react';
import style1 from './Card.module.css'

export default function Card(props) {
  // acá va tu código
  return(
    <div className={style1.cardcontainer}>
      <button onClick={props.onClose} className={style1.btn}>X</button>
      <h4>{props.name}</h4>
      <div>T.max: {props.max} °C</div>
      <div>T.min: {props.min} °C</div>
      <div>Wind speed: {props.wind} km/h</div>
      <img className={style1.img} 
      src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='icon'/>
    </div>
  ) 
};