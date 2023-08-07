import './App.css';
import React from 'react';
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path='/beers' element={<Beers />} />
        <Route path='/RandomBeer' element={<RandomBeer />} />
        <Route path='/NewBeer' element={<NewBeer />} />
    </Routes>
    </div>
  );
}

export default App;