import React from 'react'
import { IMovie } from '../models/movis'
import "../css/bootstrap.min.css";

export type FilterProps = {
    movies: IMovie
}

let generalMap = new Map([
    [28, "Action"],
    [12, "Adventure"],
    [16, "Animation"],
    [35, "Comedy"],
    [80, "Crime"],
    [99, "Documentary"],
    [18, "Drama"],
    [10751, "Family"],
    [14, "Fantasy"],
    [36, "History"],
    [27, "Horror"],
    [10402, "Music"],
    [9648, "Mystery"],
    [10749, "Romance"],
    [878, "Science Fiction"],
    [10770, "TV Movie"],
    [53, "Thriller"],
    [10752, "War"],
    [37, "Western"]

]);

const FilterMovieButtons = ({filterItem} : any) => {
    return (
        <div className='filter-movie-buttons'>
            <button
                key="all"
                value="all"
                onClick={filterItem}
                className="btn btn-primary"
            >All</button>
            {Array.from(generalMap.entries()).map((entry) => {
                const [key, value] = entry;
                return (<button
                    key={key}
                    value={key}
                    onClick={filterItem}
                    className="btn btn-primary"
                >{value}</button>);
            }
            )}
        </div>
    )
}

export default FilterMovieButtons
