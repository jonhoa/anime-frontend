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
    <div class="row">
      <div class="col-sm-4">
        <img src={anime.image_url} alt="..." width="300" height="300" class="img-thumbnail pull-left"/>
      </div>
      <div class="col-sm-8">
        <h1>{anime.name}</h1>
        <p>{anime.description}</p>
        <button type ="submit" class="btn btn-success">Add to Favorites</button>
      </div>
    </div>
  );
}
