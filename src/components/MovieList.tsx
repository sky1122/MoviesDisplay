import React from 'react'
import "../css/movieList.css";
import { Link } from 'react-router-dom';
import { AppProps } from '../components/MovieCard';

const IMG_API = "https://image.tmdb.org/t/p/w500";


const MovieList = ({ movies , map, fakeId }: AppProps): JSX.Element => {
  return (
    <div className='movieList_single'>
      <Link to={`/Search/${fakeId}`} state={{ map }}>
      <img src={IMG_API + movies.poster_path} alt={movies.title} />
      </Link>
      <div className='movie-info'>
        <h3>{movies.title}</h3>
        <div>voteAverage: {movies.vote_average}</div>
        <div>popularity: {movies.popularity}</div>
      </div>
    </div>
  )
}

export default MovieList
