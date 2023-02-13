import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function Profile() { 
  const [user, setUsers] = useState([]);
  const [fav, setFav] = useState([]);
  const params = useParams();

  const handleProfile = () => {
    console.log(params.id);
    axios.get(`http://localhost:3000/user/${params.id}`).then(response =>{
      console.log(response.data);
      setUsers(response.data);
    }
    );
  };
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

  useEffect(handleProfile, []);
  useEffect(handleFav, []);



  return (
    <div class ="container">
      <div class= "container-profile">
      <h1>Welcome {user["name"]} to Your Profile Tab</h1>
      <img src ={user["pic"]}/>
      <p>Display your favorite titles</p>
      <p>Add favorites</p>
      <p>Remove favorites here</p>
      <hr/>
      <h5>Favorites</h5>
      {fav.map(favorite => (
        <div key={favorite.id}>
          <p><img src={favorite.item.image_url} class="img-favorites"/></p>
          <p>{favorite.item.name}</p>
          <button type ="Submit" class ="btn btn-danger" onClick={() => handleDeleteFavorite(favorite)}>Delete</button>
        </div>
      ))}
      <hr/>
    </div>
    </div>
  );
}
