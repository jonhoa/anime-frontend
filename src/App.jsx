import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import './App.css'
import axios from 'axios';
import { Header } from './Header';
import { Footer } from './Footer';
import { Content } from './Content';
import { Login } from './Login';
import { ProductsIndex } from './ProductsIndex';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;