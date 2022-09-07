import React from 'react';
//props={onSearch: fn()}
export default function SearchBar(props) {
  // acá va tu código
  return( 
    <div>
      <input type='text' placeholder={'Ciudad...'}/>
      <button onClick={()=>props.onSearch('Buscando Ciudad')}>Agregar</button>
    </div>
  )
};