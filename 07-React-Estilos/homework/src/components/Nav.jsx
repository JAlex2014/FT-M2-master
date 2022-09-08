import React from 'react';
import SearchBar from './SearchBar.jsx';


function Nav({onSearch}) {
  return (
    <div>
        <SearchBar onSearch={onSearch}></SearchBar>
    </div>
  );
};

export default Nav;
