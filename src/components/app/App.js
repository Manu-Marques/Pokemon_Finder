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

  const [pokeDex, setPokedex] = useState([])
  const [pokemonVamos, setPokemonVamos] = useState('https://pokebuildapi.fr/api/v1/pokemon/limit/20')

   const test = async () => {
     const res = await axios.get(pokemonVamos)
      getPokemonVamos(res.data)
  }

  const getPokemonVamos = async (res) => {
  res.map(async (item) => {
     setPokedex(state => {
       state = [...state, item]
       return state
     })
   })
  }

   useEffect(() => {
  test()
  }, [pokemonVamos])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details-card/:id" element={<DetailsCard pokemon={pokeDex} />} />

        <Route path="/liste-pokemons" element={<PokemonList pokemon={pokeDex} />} />
        <Route path="/pokemon-hasard" element={<PokemonRandom />} />
        <Route path="/jeux-videos" element={<VideoGames pokemon={pokeDex} />} />
      </Routes>
    </div>
  );
}
