import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Fetches User ID and data 
export function fetchProfile() {
    const [user, setUsers] = useState([]);
    const params = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3000/user/${params.id}`).then(response => {
            console.log(response.data);
            setUsers(response.data);
        })
      }, []);
      return user;
}