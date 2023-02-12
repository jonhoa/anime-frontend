import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function AnimeShow() {
  const [anime, setShow] = useState([]);
  const params = useParams();

  const handleShow = () => {
    console.log(params.id);
    axios.get(`http://localhost:3000/anime/${params.id}.json`).then(response =>{
      console.log(response.data);
      setShow(response.data);
    }
    );
  };

  const handleAddFavorite = () => {
    console.log("Clicked on " + anime.id);
    console.log(anime.favorited);
    const newParams = {item_id: anime.id};
    axios.post("http://localhost:3000/favorites/add",newParams).then(response => {
      console.log(response.data);
      window.location.href = "";
      // dynamically add anime.id and current_user.id into submit request
    });
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
        {/* if logged in and jwt is available, show add favorite button */}
        {!anime.favorited && 
        <button type ="submit" class="btn btn-success" onClick={handleAddFavorite} name="item_id" >Add to Favorites</button>
        }
        <h2>Reviews</h2> <hr/>
        {/* add other user reviews here */}
        <p>Anonymous: 'Very good'</p>
      </div>
    </div>
  );
}
