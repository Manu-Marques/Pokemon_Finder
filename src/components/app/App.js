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

  const [pokemonData, setPokemonData] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [pokedexUrl, setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon')

  const pok = async () => {
    const res = await axios.get(pokedexUrl)
    getPokemon(res.data.results)
  }
  
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url)
      setPokemonData(state => {
        state = [...state,result.data]
        state.sort((a, b) => a.id>b.id?1:-1)
        return state
      })
    })
  }

  useEffect(() => {
    pok()
  }, [pokedexUrl])

  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details-card/:id" element={<DetailsCard pokemon={pokemonData} />} />

          <Route path="/liste-pokemons" element={<PokemonList pokemon={pokemonData} />} />
          <Route path="/pokemon-hasard" element={<PokemonRandom />} />
          <Route path="/jeux-videos" element={<VideoGames />} />
        </Routes>
      </div>
    );
  }
