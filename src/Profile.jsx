import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function Profile() { 
  const [user, setUsers] = useState([]);
  const params = useParams();

  const handleProfile = () => {
    console.log(params.id);
    axios.get(`http://localhost:3000/user/${params.id}`).then(response =>{
      console.log(response.data);
      setUsers(response.data);
    }
    );
  };

  useEffect(handleProfile, []);


  return (
    <div>
      <h1>Welcome {user} to Your Profile Tab</h1>
      <p>Display your favorite titles</p>
      <p>Add favorites</p>
      <p>Remove favorites here</p>
    </div>
  );
}
