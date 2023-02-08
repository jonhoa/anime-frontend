import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function AnimeShow() {
  const [anime, setShow] = useState([]);
  const params = useParams();

  const handleShow = () => {
    console.log(params.id);
    axios.get(`http://localhost:3000/items/${params.id}`).then(response =>{
      console.log(response.data);
      setShow(response.data);
    }
    );
  };

  useEffect(handleShow, []);
  return (
    <div>
      <h1>{anime.name}</h1>
      <img src={anime.image_url} width="300" height="300" justify="left"/>
      <p>{anime.description}</p>
    </div>
  );
 }
