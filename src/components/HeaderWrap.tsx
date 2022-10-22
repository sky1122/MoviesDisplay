import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/HeaderWrap.css';
const HeaderWrap = () => {
    const [search, setSearch] = useState<string>("");
  return (
    <div>
    <div className='header'>
      <span className='heading'><Link to="/">IMDB MOVIE DIRETORY </Link></span>
      <div className='text'><Link to="/Search">Search</Link></div>
      <div className='text'><Link to='/Gallery'>Gallery</Link></div>

    </div>
    </div>
  )
}

export default HeaderWrap
