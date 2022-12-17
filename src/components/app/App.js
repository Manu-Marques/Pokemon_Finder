import './App.css';
import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Home from '../home';
import DetailsCard from '../detailsCard';
import VideoGames from '../videoGames';
import PokemonList from '../pokemonList';
import PokemonRandom from '../pokemonRandom';

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {

  const [pokemon, setPokemon] = useState([])
  
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then(res => {
      setPokemon(res.data.results.map(p => p.name))
    })
    console.log(pokemon);
  }, [])


  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/details-card" element={<DetailsCard />} />
          <Route path="/details-card/:id" element={<DetailsCard />} />

          <Route path="/liste-pokemons" element={<PokemonList results={pokemon} />} />
          <Route path="/pokemon-hasard" element={<PokemonRandom />} />
          <Route path="/jeux-videos" element={<VideoGames />} />
      </Routes>
    </div>
  );
}
