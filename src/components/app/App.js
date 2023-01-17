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
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

export default function App() {

  const [pokemon, setPokePokemon] = useState([])
  const [pokeData, setPokemonData] = useState('https://pokebuildapi.fr/api/v1/pokemon/limit/20')
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const pokemons = useRef([])

  const getAllPokemons = async () => {
    const res = await axios.get(pokeData)
    getPokemon(res.data)
    pokemons.current = res.data.sort((a, b) => a.name.localeCompare(b.name));
    setFilteredPokemons(pokemons.current);
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
  }, [pokeData])



  return (
    <div className="App">
      <Header pokemon={pokemon} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details-card/:id" element={<DetailsCard pokemon={pokemon} />} />

        <Route path="/liste-pokemons" element={<PokemonList pokemon={pokemon} />} />
        <Route path="/pokemon-hasard" element={<PokemonRandom pokemon={pokemon} />} />
        <Route path="/jeux-videos" element={<VideoGames pokemon={pokemon} />} />
      </Routes>
    </div>
  );
}
