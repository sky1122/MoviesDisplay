import React, { useEffect, useState } from 'react'
import { IMovie } from '../models/movis';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import '../css/movie.css';
import FilterMovieButtons from './FilterMovieButtons';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=";

const MovieCardWrap = () => {
    const [movies, setMovies] = useState<IMovie[] | null>([]);
    const [filtredMovie, setFiltredMovie] = useState<IMovie[] | null>([]);
    const filterItem = (e: { target: { value: any; }; }) => {
        let typeMovie: string = e.target.value;
        
        if (typeMovie === "all") {
            setMovies(filtredMovie);
        }
        else {
            const newItem = filtredMovie ? filtredMovie.filter((newVal) => {
            return newVal.genre_ids.some(x => x.toString() === typeMovie);
        }) : null
        setMovies(newItem);
    }
    };
    useEffect(() => {
        axios.get(FEATURED_API).then((Response) => {
            
            setFiltredMovie(Response.data.results);
            setMovies(Response.data.results);
        });
    }, []);
    
    let moviesMap = new Map<number, number>();
    let getFakeIdMap = new Map<number, number>();
    let count = 0;

    let finalMap =  movies ? movies.forEach((movie) => {
        moviesMap.set(count, movie.id);
        getFakeIdMap.set(movie.id, count);
        count += 1;
        return moviesMap;
    }) : null;

    return (
        <div className='movie-card-list'>
            <FilterMovieButtons filterItem={filterItem}/>
            <div className='movie-container'>
                {movies ? movies.map((movie) => {
                    return (
                        // <Link to={`/Gallery/${movie.id}`}>
                        <MovieCard movies={movie} map = {moviesMap} fakeId = {getFakeIdMap.get(movie.id)} key={movie.id}/>
                        // {/* </Link> */}
                    );
                }) : null}
            </div>
        </div>
    )
}

export default MovieCardWrap
