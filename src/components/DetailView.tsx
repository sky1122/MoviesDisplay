import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react'
import "../css/bootstrap.min.css";
import "../css/detailView.css";
import { useParams, useLocation, Link } from 'react-router-dom'
import { IMovie } from '../models/movis';

const IMG_API = "https://image.tmdb.org/t/p/w500";
const DetailView = () => {
    const params = useParams();

    const location = useLocation();
    const { map } = location.state;

    const singleMovieUrl = `https://api.themoviedb.org/3/movie/${map.get(Number(params.movieId))}?api_key=`;

    
    const [movie, setMovie] = useState<IMovie>();

    useEffect(() => {
        console.log(params.movieId);
        console.log(singleMovieUrl);
        axios.get(singleMovieUrl)
        .then((Response) => {
            setMovie(Response.data);
            console.log(Response);
        })
        .catch((e: AxiosError) => { // really AxiosError?
            console.log("eerror");
            console.log(e.message);
        });
    }, [singleMovieUrl, params.movieId]);

    let pagePrev = (Number(params.movieId) - 1) < 0 ? map.size - 1 : Number(params.movieId) - 1;
    let pageNext = (Number(params.movieId) + 1) >= map.size ? 0 : Number(params.movieId) + 1;


    return (
        <>
            {
                movie && (
                    <div className='card-warp'>
                    <Link className="prev" to={`/Gallery/${pagePrev} `} state={{ map }}>&#10094;</Link>
                        
                    <div className="card" >
                        <img src={IMG_API + movie.poster_path} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h3>title:  {movie.title}</h3>
                        <br/>
                            <p className="card-text">
                                {movie.overview}
                            </p>
                        </div>
                        <div>
                            <h3>release date: {movie.release_date}</h3>
                        </div>
                    </div>
                    <Link className="next" to={`/Gallery/${pageNext} `} state={{ map }}>&#10095;</Link>
                    </div>
                )

            }
        </>
    )
}

export default DetailView
