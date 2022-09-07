import React from 'react';
import style from './Card.module.css'

export default function SearchBar(props) {
  return( 
    <div>
      <input type='text' placeholder={'Ciudad...'}/>
      <button onClick={()=>props.onSearch('Buscando Ciudad')}>Agregar</button>
    </div>
  )
};