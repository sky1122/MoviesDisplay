import React from 'react';
import './App.css';
import './css/movie.css';

import {Routes, Route} from "react-router-dom";
import HeaderWrap from './components/HeaderWrap';
import MovieCardWrap from './components/MovieCardWrap';
import InputFeild from './components/InputFeild';
import DetailView from './components/DetailView';


const App: React.FC = () => {

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
