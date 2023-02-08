import { useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductsNew } from './ProductsNew';
import { ProductsIndex } from './ProductsIndex';
import { AnimeShow } from './AnimeShow';
import { Login } from './Login';
import axios from 'axios';
import { Signup } from './Signup';
import { Home } from './Home';

export function Content() {
  const [items, setItems] = useState([]);
  const handleProductsIndex = () => {
    axios.get("http://localhost:3000/all").then(response =>{
      console.log(response.data);
      setItems(response.data);
    });
  };
  useEffect(handleProductsIndex, []);

  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home items={items}/>} />
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<ProductsIndex items ={items} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/anime/:id" element={<AnimeShow />} />
      </Routes>
      <br/>
    </div>
  );
}
