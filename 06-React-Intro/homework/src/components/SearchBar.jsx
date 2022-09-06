import React from 'react';
//props={onSearch: fn()}
export default function SearchBar(props) {
  // acá va tu código
  return( 
    <div>
      <input type='text' name='search' id='search'/>
      <button onClick={props.onSearch}>Busca tu Ciudad... </button>
    </div>
  )
};