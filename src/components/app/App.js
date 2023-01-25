import React from 'react';
import Header from '../header';
import Home from '../home';
import DetailsCard from '../detailsCard';
import ScrollToTop from '../ScrollToTop';
import CallApi from '../callApi';

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {

  const [pokemon, setPokePokemon] = useState([])
  // eslint-disable-next-line
  const [pokeData, setPokemonData] = useState('https://pokebuildapi.fr/api/v1/pokemon')

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
    <div className="overflow-hidden dark:bg-gray-100">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home pokemon={pokemon} />} />
        <Route path="/details-card/:id" element={<DetailsCard pokemon={pokemon} />} />
        <Route path="/api" element={<CallApi />} />
      </Routes>
    </div>
  );
}
