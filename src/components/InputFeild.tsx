import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../css/inputFeild.css";
import { IMovie } from '../models/movis';
import MovieList from './MovieList';
import "../css/bootstrap.min.css";

// interface Props {
//   search: string;
//   // check: string;
//   setSearch: React.Dispatch<React.SetStateAction<string>>;
//   // handleSearch:() => ReturnType;
// }

type OptionType = {
  value: string;
  label: string;
};
const options: OptionType[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=230f31c8aa52db32d37d5f529e633641&query=";

const InputFeild = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [movies, setMovies] = useState<IMovie[] | null>([]);

  const handleOnSumbit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    axios.get(SEARCH_API + searchTerm)
      .then((Response) => { setMovies(Response.data.results); console.log(Response.data.results); })
      .catch((err: any) => { console.error(err) });
  };

  const handleOnChange = (e: { target: { value: any; }; }) => {
    setSearchTerm(e.target.value);

  }

  // const [selectedOption, setSelectedOption] = useState<string>(() => ({key: "Param"}));
  const [selectedOption, setSelectedOption] = useState<string>();
  const [checkedOption, setcheckedOption] = useState<string>();

  const handleCheckChange = (event: { target: { value: string; }; }) => {
    // event.preventDefault();
    let checkedOption: string = event.target.value;
    setcheckedOption(checkedOption);
    console.log("handleCheckChange selectedOption: " + selectedOption);
    console.log("handleCheckChange checkedOption: " + checkedOption);

    if (selectedOption === "popularity") {
      if (checkedOption === "descending") {
        const desendSort = movies ? movies.sort((a, b) => b.popularity - a.popularity) : null;
        setMovies(desendSort);
      } else if (checkedOption === "ascending") {
        const ascendSort = movies ? movies.sort((a, b) => a.popularity - b.popularity) : null;
        setMovies(ascendSort);
      }
    } else if (selectedOption === "vote_average") {
      if (checkedOption === "descending") {
        const desendSort = movies ? movies.sort((a, b) => b.vote_average - a.vote_average) : null;
        setMovies(desendSort);
      } else if (checkedOption === "ascending") {
        const ascendSort = movies ? movies.sort((a, b) => a.vote_average - b.vote_average) : null;
        setMovies(ascendSort);
      }
    }
  }

  const handleSelectChange = (event: any) => {
    let selectedOption: string = event.target.value;
    setSelectedOption(selectedOption);

    console.log("handleSelectChange selectedOption: " + selectedOption);
    console.log("handleSelectChange checkedOption: " + checkedOption);
    // console.log(selectedOption === "vote_average");
    // console.log(checkedOption === "descending");
    if (selectedOption === "popularity") {
      if (checkedOption === "descending") {
        const desendSort = movies ? movies.sort((a, b) => b.popularity - a.popularity) : null;
        setMovies(desendSort);
      } else if (checkedOption === "ascending") {
        const ascendSort = movies ? movies.sort((a, b) => a.popularity - b.popularity) : null;
        setMovies(ascendSort);
      }
    } else if (selectedOption === "vote_average") {
      if (checkedOption === "descending") {
        const desendSort = movies ? movies.sort((a, b) => b.vote_average - a.vote_average) : null;
        setMovies(desendSort);
      } else if (checkedOption === "ascending") {
        const ascendSort = movies ? movies.sort((a, b) => a.vote_average - b.vote_average) : null;
        setMovies(ascendSort);
      }
    }
  }

    let moviesMap = new Map<number, number>();
    let getFakeIdMap = new Map<number, number>();
    let count = 0;

    let temp = movies ? movies.forEach((movie) => {
        moviesMap.set(count, movie.id);
        getFakeIdMap.set(movie.id, count);
        count += 1;
    }) : null;

  return (
    <div className='search'>
      <form className='input-search' onSubmit={handleOnSumbit}>
        <input
          type='search'
          placeholder='Enter a movie name'
          className='input_box'
          value={searchTerm}
          onChange={handleOnChange} />
        <button className='input_submit' type='submit'>Go</button>
      </form>

      <div className='select'>
        <select className="form-select"  onChange={handleSelectChange} defaultValue="default">
          <option value="default">Open this select menu</option>
          <option value="vote_average">voteAverage</option>
          <option value="popularity">popularity</option>
        </select>
      </div>


      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value='ascending' onChange={handleCheckChange}/>
          <label className="form-check-label" htmlFor="flexRadioDefault1">
          ascending
          </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value='descending' onChange={handleCheckChange}/>
          <label className="form-check-label" htmlFor="flexRadioDefault2">
          descending
          </label>
      </div>


      <div className='movie-list-container'>
        {movies ? movies.map((movie) => {
          return (
            <MovieList movies={movie} map = {moviesMap} fakeId = {getFakeIdMap.get(movie.id)} key={movie.id}/>
          );
        }) : null}
      </div>


    </div>

  )
}

export default InputFeild
