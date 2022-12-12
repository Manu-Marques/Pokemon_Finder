import './App.css';
import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Home from '../home';
import DetailsCard from '../detailsCard';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/details-card" element={<DetailsCard />} />
      </Routes>
      <Footer/>
    </div>
  );
}
