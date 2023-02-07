import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
import { Header } from './Header';
import { Footer } from './Footer';
import { Content } from './Content';

function App() {
  
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;