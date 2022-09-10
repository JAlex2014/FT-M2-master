import React from 'react';
import SearchBar from './SearchBar.jsx'; 
import {Link} from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHenry" src={"https://blog.soyhenry.com/content/images/2021/03/151211491_440151970756357_8005198803636550092_o.jpg"} width="30" height="30" 
          className="d-inline-block align-top" alt="" />
          Henry - Weather App
        </span>
      </Link>
      <Link to='/about'>
        <span className="navbar-brand">About</span>
      </Link>
      <div>
        <SearchBar onSearch={onSearch}></SearchBar>
      </div>
    </nav>
  );
};

export default Nav;
