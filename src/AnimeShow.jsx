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
    <div class= "container">
      <div class= "container-body">
        <div class="row">
          <div class="col-sm-4">
            <img src={anime.image_url} alt="..." id ="thumbnail-show"/>
          </div>
          <div class="col-sm-8">

            {/* Search */}
            <br/>
        
            <h1>{anime.name}</h1>
            {/* genre buttons go here */}
            <p>{anime.description}</p>
            <br/>
            {/* if logged in and jwt is available, show add favorite button */}
            {!anime.favorited && 
      <button type ="submit" class="btn btn-success" onClick={handleAddFavorite} name="item_id" >Add to Favorites</button>
            }
            {anime.favorited &&
            <button type="button" class="btn btn-lg btn-primary" disabled>Already Favorited</button>
            }
            <br/><br/>
            <h2>Trailer</h2><hr/>
            <iframe src={'https://www.youtube.com/embed/' + anime.video}
              frameborder='0'
              allow='autoplay; encrypted-media'
              height="350px"
              width ='470vw'
              allowfullscreen
              title='video'
            />
          </div>
        </div>
      </div>
    </div>
 
  );
}
  