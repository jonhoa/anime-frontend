import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const useAxios = () => {
    const [weather, setWeather] = useState();

    // useEffect(() => {
    //   axios.get(url).then((response) => {
    //   const result = response.data;
    //   console.log(result);  
    //   setWeather(result);
    //   }).catch((err)=> console.log(err));},[query]);
    //   return [weather, setWeather];
    // };
    // export default useAxios
        axios.get("http://localhost:3000/all").then(response => {
          console.log(response.data);
          setWeather(response.data);
        });
        useEffect(useAxios, []);
    }