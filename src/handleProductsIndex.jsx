import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAxios } from './useAxios';

export const handleProductsIndex = () => {
  const [index, setIndex] = useState(null);

// useEffect(() => {axios.get("http://localhost:3000/all").then(response => {
//     feed.push(response.data);
//   }});
// ))};
// handleProductsIndex();


useEffect(() => {
  axios.get("http://localhost:3000/all").then(response => {
    setIndex(response.data);
    console.log(response.data);
    console.log(response.data);
  }
  )
  return index
}
)};
export default useAxios

