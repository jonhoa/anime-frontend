import { useState } from 'react';
import { useEffect } from 'react';
import { ProductsNew } from './ProductsNew';
import { ProductsIndex } from './ProductsIndex';
import axios from 'axios';

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
      <ProductsIndex items ={items} />
    </div>
  );
}
