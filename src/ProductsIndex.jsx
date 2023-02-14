import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

export function ProductsIndex() { 
  // Kitsu API TEST
  const [kitsu, setKitsu] = useState([]);
  const [start,setStart] = useState(0);
  const [end,setEnd] = useState(20);
  const [page,setPage] = useState(0);
  const API_BASE = 'https://kitsu.io/api/edge';
  
  const handleNext = () => {
    console.log("next page");
    setPage(page + 20);
    setStart(start + 20);
    console.log(page);
      axios.get(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${page}`).then(response =>{
        console.log(response.data.data);
        setKitsu(response.data.data);
        console.log(page);
      }
      );
    }


  const handlePrevious = () => {
    console.log("Previous page");
    console.log(page);
    setPage(page - 20);
    setEnd(end - 20);
    handleKitsu;
  };
  
  const handleKitsu = () => {
    axios.get(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${page}`).then(response =>{
      console.log(response.data.data);
      setKitsu(response.data.data);
    }
    );
  };
  useEffect(handleKitsu, []);
  

  return (
    <div class ="container">
      
      <div class="main-body">
        <div class ="row">
          {/* side bar */}
          <div class="col-sm-2">
            <div class="card-home">
              <div class="card-header">Popular</div>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://samdrewtakeson.com/wp-content/uploads/2022/11/Bleach-Thousand-Year-Blood-War-Episode-9-Release-Date-800x600.jpg" class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title"><a href="">Bleach</a></h5><hr/>
                  </div>
                </div>
              </div>
          
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2021/10/Mob-Psycho-100-Season-3-1-scaled-e1634624616827.jpg" class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Mob Psycho 100 III</h5><hr/>
                  </div>
                </div>
              </div>

              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://gamerbraves.sgp1.cdn.digitaloceanspaces.com/2021/11/gantz.jpg" class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Gantz</h5><hr/>
                  </div>
                </div>
              </div> 
            </div>
            <div class="card">
              <h2>Search</h2>
              <input type="search"></input>
              <button type="submit">Q</button>
            </div>
          </div>
          <div class="col-sm-10">
            <div class="row row-cols-1 row-cols-md-4 g-4">
        
              {/* card */}
              {kitsu.slice(start, end).map(title => (
                <div class="col h-100">
                  <div>
                    <Link to={'/anime/' + title.id}>
                    <img src={title.attributes.posterImage.medium} class="img-thumbnail" alt="..."/>
                    </Link>
                    <div class="card-footer">
                      <small class="text-muted">{title.attributes.canonicalTitle}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        <div class ="button-footer">
            <button class = "button-7" onClick={() => handlePrevious()}>Previous</button>
            <button class = "button-7" onClick={() => handleNext()}>Next</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// <div>
//   {kitsu.map(animes =>(
//     <div key ={animes.id}>
//       <img src={animes.attributes.posterImage.medium}/>
//       <p>{animes.attributes.canonicalTitle}</p>
//     </div>
//   ))}
// </div>