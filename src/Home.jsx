import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function Home() { 
  const params = useParams();
  const [titles, setTitles] = useState([]);

  const handleTitles = () => {
    axios.get("http://localhost:3000/all").then(response =>{
      console.log(response.data);
      setTitles(response.data);
    }
    );
  };

  useEffect(handleTitles, []);


  console.log(titles.name);
  return (
    <h1>Home</h1>
  );
}
