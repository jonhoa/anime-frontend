import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


export function fetchKitsu() {
  const [kitsu, setKitsu] = useState([]);
  const [nt, setNt] = useState([])

  useEffect(() => {
    axios.get(`https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&page%5Boffset%5D=0`).then(response => {
    console.log(response.data);
    setKitsu(response.data.data);
    setNt(response.data.links.next);
  })
  }, []);
  return kitsu;
};
