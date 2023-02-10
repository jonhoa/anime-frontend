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

  useEffect(handleProfile, []);
  useEffect(handleFav, []);



  return (
    <div>
      <h1>Welcome {user["name"]} to Your Profile Tab</h1>
      <img src ={user["pic"]}/>
      <p>Display your favorite titles</p>
      <p>Add favorites</p>
      <p>Remove favorites here</p>
      <hr/>
      <h5>Favorites</h5>
      {fav.map(favorite => (
        <div key={favorite.id}>
          <p><img src={favorite.item.image_url} class="img-thumbnail" height="70"/></p>
          <p>{favorite.item.name}</p>
        </div>
      ))}
      <hr/>
    </div>
  );
}
