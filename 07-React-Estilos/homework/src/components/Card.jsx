import React from 'react';
import style1 from './Card.module.css';
import {Link} from 'react-router-dom';

export default function Card(props) {
  // acá va tu código
  return(
    <div className={style1.cardcontainer}>
      <button onClick={props.onClose} className={style1.btn}>X</button>
      <Link to={`/ciudad/${props.id}`}>
        <h4 className="card-title">{props.name}</h4>
      </Link>
      <div>T.max: {props.max} °C</div>
      <div>T.min: {props.min} °C</div>
      <div>Wind speed: {props.wind} km/h</div>
      <img className={style1.img} 
      src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='icon'/>
    </div>
  ) 
};