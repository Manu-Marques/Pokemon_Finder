import './App.css';
import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Home from '../home';
import DetailsCard from '../detailsCard';
import VideoGames from '../VideoGames';
import PokemonList from '../pokemonList';
import PokemonRandom from '../pokemonRandom';

import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/details-card" element={<DetailsCard />} />
          <Route path="/details-card/:id" element={<DetailsCard />} />

          <Route path="/liste-pokemons" element={<PokemonList />} />
          <Route path="/pokemon-hasard" element={<PokemonRandom />} />
          <Route path="/jeux-videos" element={<VideoGames />} />
      </Routes>
    </div>
  );
}
