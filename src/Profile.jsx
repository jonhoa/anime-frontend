import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchProfile } from "./api/fetchProfile";

export function Profile() { 
  
  const [fav, setFav] = useState([]);
  
const user = fetchProfile();

  const handleFav = () => {
    axios.get("http://localhost:3000/favorites.json").then(response => {
      console.log(response.data);
      setFav(response.data);
    });
  };

  const handleDeleteFavorite = (favorite) => {
    console.log("Trying to delete " + favorite.item.name);
    console.log("Trying to delete favorite id of " + favorite.id);
      
    // Finish working on the axios delete button
    axios.delete(`http://localhost:3000/favorites/${favorite.id}`).then(response => {
      console.log("deleting");
      console.log(response.data);
      window.location.href = "";
    });
  }; 
  console.log(user["pic"]);
  useEffect(handleFav, []);



  return (
   
    <div class= "container-profile">
      <h1>Welcome {user["name"]} to Your Profile Tab</h1>
      <div class="row">
        <div class="col-sm-2">
          <div class="profile-logo">
            `<div class="profile-block">`
              <div class="user-image">
                <img src ={user["pic"]}/>
                <p><small text-align ="center">{user["name"]}</small></p>
                <small>Created: {user["created"]}</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-10">
          <div class="favorite-header">
            <p>Favorites</p>
            <div class="row row-cols-1 row-cols-md-4 g-4">
              {fav.map(favorite => (
                <div key={favorite.id}>
                  <div class="row row-cols-1 row-cols-md-2 g-2">
                    <img src={favorite.item.image_url} class="img-favorites"/>
                    <div>
                      <p>{favorite.item.name}</p>
                      <button type ="Submit" class ="btn btn-danger" onClick={() => handleDeleteFavorite(favorite)}>Delete</button>
                    </div>
                  </div>
                  <br/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
