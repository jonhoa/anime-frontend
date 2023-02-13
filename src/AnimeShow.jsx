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
    <div class= "container-body">
      <div class="row">
        <div class="col-sm-4">
          <img src={anime.image_url} alt="..." id ="thumbnail-show"/>
        </div>
        <div class="col-sm-8">
          <h1>{anime.name}</h1>
          {/* genre buttons go here */}
          <p>{anime.description}</p>
          {/* if logged in and jwt is available, show add favorite button */}
          {!anime.favorited && 
        <button type ="submit" class="btn btn-success" onClick={handleAddFavorite} name="item_id" >Add to Favorites</button>
          }
          <h2>Trailer</h2><hr/>
          <p>iframe thing goes here</p>
          <iframe src='https://www.youtube.com/embed/qig4KOK2R2g'
            frameborder='0'
            allow='autoplay; encrypted-media'
            width="60%"
            height="auto"
            allowfullscreen
            title='video'
          />
          <h2>Characters</h2>
          <hr/>
        </div>
      </div>
      <div class= "row">
        <div class="col-sm-4"><br/></div>
        <div class="col-sm-8">
          <h2>Reviews</h2> <hr/>
          {/* add other user reviews here */}
          <p>Anonymous: 'Very good'</p>
        </div>
      </div>
    </div>
  );
}
