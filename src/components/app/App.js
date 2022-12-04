import './App.css';
import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Main from '../main';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
