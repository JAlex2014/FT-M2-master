import React, {useState} from 'react';

export default function SearchBar(props) {
  const [searchInput, setsearchInput] = useState('');
  return( 
    <div>
      <input type='text' placeholder={'Ciudad...'} onChange={(event)=>{setsearchInput(event.target.value)}}/>
      <button onClick={()=>{props.onSearch(searchInput);
      }}>Agregar</button>
    </div>
  )
}; 