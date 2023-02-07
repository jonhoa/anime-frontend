import { useState } from 'react';
import { useEffect } from 'react';
import { ProductsNew } from './ProductsNew';
import { ProductsIndex } from './ProductsIndex';
import { Login } from './Login';
import axios from 'axios';
import { Signup } from './Signup';

export function Content() {
  const [items, setItems] = useState([]);
  const handleProductsIndex = () => {
    axios.get("http://localhost:3000/all").then(response =>{
      console.log(response.data);
      setItems(response.data);
    });
  }
  useEffect(handleProductsIndex, []);

  return (
    <div>
      <ProductsNew />
      <Login />
      <br/>
      <Signup/>
      <br/>
      <ProductsIndex items ={items} />
    </div>
  );
}
