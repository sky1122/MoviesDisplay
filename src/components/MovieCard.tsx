import React, { useEffect, useState } from 'react'

import { IMovie } from '../models/movis';
import "../css/movie.css";
import { Link } from 'react-router-dom';
const IMG_API = "https://image.tmdb.org/t/p/w500";



export type AppProps = {
  movies: IMovie,
  map: Map<number, number>,
  fakeId: number | undefined
}

const MovieCard = ({ movies , map, fakeId}: AppProps) : JSX.Element => {
  console.log(movies.id);
  console.log(map);
  console.log(fakeId);
  return (
    
      <div className='movie'>


        <Link to={`/Gallery/${fakeId}`} state={{ map }}>
        <img src={IMG_API + movies.poster_path} alt={movies.title} />
        </Link>
        <div className='movie-info'>
          <h3>{movies.title}</h3>
          <span>{movies.vote_average}</span>
        </div>
      </div>
  )

}

export default MovieCard
