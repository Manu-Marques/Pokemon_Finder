import './App.css';
import React from 'react';
import Header from '../header';
import Home from '../home';
import DetailsCard from '../detailsCard';
import PokemonList from '../pokemonList';
import PokemonRandom from '../pokemonRandom';
import VideoGames from '../videoGames';
import ScrollToTop from '../ScrollToTop';

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {


  const [pokemon, setPokePokemon] = useState([])
      // eslint-disable-next-line
  const [pokeData, setPokemonData] = useState('https://pokebuildapi.fr/api/v1/pokemon/limit/20')
  

  const getAllPokemons = async () => {
    const res = await axios.get(pokeData)
    getPokemon(res.data)
  }

  const getPokemon = async (res) => {
    res.map(async (item) => {
      setPokePokemon(state => {
        state = [...state, item]
        return state
      })
    })
  }

  useEffect(() => {
    getAllPokemons()
    // eslint-disable-next-line
  }, [pokeData])

  return (
    <div className="App">
      <Header pokemon={pokemon} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details-card/:id" element={<DetailsCard pokemon={pokemon} />} />

        <Route path="/liste-pokemons" element={<PokemonList pokemon={pokemon} />} />
        <Route path="/pokemon-hasard" element={<PokemonRandom />} />
        <Route path="/jeux-videos" element={<VideoGames pokemon={pokemon} />} />
      </Routes>
    </div>
  );
}
