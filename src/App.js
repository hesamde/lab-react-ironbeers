import './App.css';
import React from 'react';
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import BeerDetails from "./pages/BeerDetails";

function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path='/beers' element={<Beers />} />
        <Route path='/RandomBeer' element={<RandomBeer />} />
        <Route path='/NewBeer' element={<NewBeer />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
    </Routes>
    </div>
  );
}

export default App;