import './App.css';
import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Main from '../main';
import detailsCard from '../detailsCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
      <Routes>
        <Route path="/details-card" element={<detailsCard/>}/>
      </Routes>
    </div>
  );
}
