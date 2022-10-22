import React from 'react';
import './App.css';
import './css/movie.css';

import {Routes, Route} from "react-router-dom";
import HeaderWrap from './components/HeaderWrap';
import MovieCardWrap from './components/MovieCardWrap';
import InputFeild from './components/InputFeild';
import DetailView from './components/DetailView';
// the difference between function and arrow function in React
// https://stackoverflow.com/questions/49306148/why-is-arrow-syntax-preferred-over-function-declaration-for-functional-react-com





// funtional component
// React.FC declear Function Component
// React.ReactNode can be lots of different type
const App: React.FC = () => {
  // empty "" todo : string



  return (

    <div className="App">
        <HeaderWrap />
        <Routes>
          <Route path='/Gallery' element={<MovieCardWrap />} />
            <Route path='Gallery/:movieId' element={<DetailView />} />
          <Route path='/Search' element={<InputFeild />} />
            <Route path='Search/:movieId' element={<DetailView />} />
        </Routes>
    </div>



  );
}

export default App;
