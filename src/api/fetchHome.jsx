import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


export function fetchHome() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3000/all").then(response => {
      setItems(response.data);
    })
  }, []);
  return items; 
} 
  
