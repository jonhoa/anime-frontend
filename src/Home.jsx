import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AnimeShow } from "./AnimeShow";
import { Link } from "react-router-dom";

export function Home(props) { 
  const [start,setStart] = useState(0);
  const [end,setEnd] = useState(12);
  const handleNext = () => {
    console.log("next page");
    setStart(start + 10);
    setEnd(end + 10);
  };
  const handlePrevious = () => {
    console.log("Previous page");
    setStart(start - 10);
    setEnd(end - 10);
  };

  return (

    <div class ="container">
      {/* Carousel */}
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          {props.items.slice(0, 3).map(title => (
            <div class="carousel-item active" data-bs-interval="10000">
              <Link to={'/anime/' + title.id}>
                <img src={title.image_url} class="d-block w-100" alt="..." height ="400"/>
              </Link>
              <div class="carousel-caption d-none d-md-block">
                <h5>{title.name}</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
          ))};
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
  
 
      <div class="main-body">
        <div class ="row">
          {/* side bar */}
          <div class="col-sm-2">
            <div class="card-home">
              <div class="card-header">Popular</div>
              {/* 0 */}
              <div class="row g-0">
                <div class="col-md-6">
                  <img src="https://cdn.myanimelist.net/images/anime/10/78745l.jpg" height ="20" class="img-fluid" alt="..."/>
                </div>
                <div class="col-md-6">
                  <h5 class="card-title"><a href="https://kitsu.io/anime/boku-no-hero-academia-6th-season" target="_blank">Hero Academia</a></h5>
                </div>
              </div>
              {/* 1 */}
              <div class="row g-0">
                <div class="col-md-6">
                  <img src="https://samdrewtakeson.com/wp-content/uploads/2022/11/Bleach-Thousand-Year-Blood-War-Episode-9-Release-Date-800x600.jpg" class="img-fluid" alt="..."/>
                </div>
                <div class="col-md-6">
                  <h5 class="card-title"><a href="https://kitsu.io/anime/bleach" target="_blank">Bleach</a></h5>
                  <hr/>
                </div>
              </div>
              {/* 2 */}
              <div class="row g-0">
                <div class="col-md-6">
                  <img src="https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2021/10/Mob-Psycho-100-Season-3-1-scaled-e1634624616827.jpg" class="img-fluid" alt="..."/>
                </div>
                <div class="col-md-6">
                  <h5 class="card-title"><a href="https://kitsu.io/anime/mob-psycho-100-iii" target="_blank">Mob Psycho 100 III</a></h5>
                </div>
              </div>
              {/* 3 */}
              <div class="row g-0">
                <div class="col-md-6">
                  <img src="https://gamerbraves.sgp1.cdn.digitaloceanspaces.com/2021/11/gantz.jpg" class="img-fluid" alt="..."/>
                </div>
                <div class="col-md-6">
                  <h5 class="card-title"><a href="https://kitsu.io/anime/gantz" target="_blank">Gantz</a></h5><hr/>
                </div>
                
              </div>
              {/* 4 */}
              <div class="row g-0">
                <div class="col-md-6">
                  <img src="https://media.kitsu.io/anime/42765/poster_image/large-5ce19551c1a6cf995b378205b9149b5c.jpeg" class="img-fluid" alt="..."/>
                </div>
                <div class="col-md-6">
                  <h5 class="card-title"><a href="https://kitsu.io/anime/jujutsu-kaisen" target="_blank">Jujutsu Kaisen</a></h5>
                </div>
                <hr/>
              </div>
              {/* 5 */}
              <div class="row g-0">
                <div class="col-md-6">
                  <img src="https://media.kitsu.io/anime/poster_images/42867/large.jpg" class="img-fluid" alt="..."/>
                </div>
                <div class="col-md-6">
                  <h5 class="card-title"><a href="https://kitsu.io/anime/dr-stone-two" target="_blank">Dr.Stone</a></h5>
                </div>
              </div>
            </div>
            <br/>

            {/* Search */}
            <div class="card-search">
              <div class="card-header">Search</div>
              <input type="search"></input>
            </div><br/>

            {/* Upcoming */}
            <div class="card-home">
              <div class="card-header">Upcoming</div>
              {/* 0 */}
              <div class="row g-0">
                <div class="col-md-6">
                  <img src="https://cdn.myanimelist.net/images/anime/10/78745l.jpg" height ="20" class="img-fluid" alt="..."/>
                </div>
                <div class="col-md-6">
                  <h5 class="card-title"><a href="https://kitsu.io/anime/boku-no-hero-academia-6th-season" target="_blank">Hero Academia</a></h5>
                </div>
              </div>
              {/* 1 */}
              <div class="row g-0">
                <div class="col-md-6">
                  <img src="https://samdrewtakeson.com/wp-content/uploads/2022/11/Bleach-Thousand-Year-Blood-War-Episode-9-Release-Date-800x600.jpg" class="img-fluid" alt="..."/>
                </div>
                <div class="col-md-6">
                  <h5 class="card-title"><a href="https://kitsu.io/anime/bleach" target="_blank">Bleach</a></h5>
                  <hr/>
                </div>
              </div>
              {/* 2 */}
              <div class="row g-0">
                <div class="col-md-6">
                  <img src="https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2021/10/Mob-Psycho-100-Season-3-1-scaled-e1634624616827.jpg" class="img-fluid" alt="..."/>
                </div>
                <div class="col-md-6">
                  <h5 class="card-title"><a href="https://kitsu.io/anime/mob-psycho-100-iii" target="_blank">Mob Psycho 100 III</a></h5>
                </div>
              </div>
              {/* 3 */}
              <div class="row g-0">
                <div class="col-md-6">
                  <img src="https://gamerbraves.sgp1.cdn.digitaloceanspaces.com/2021/11/gantz.jpg" class="img-fluid" alt="..."/>
                </div>
                <div class="col-md-6">
                  <h5 class="card-title"><a href="https://kitsu.io/anime/gantz" target="_blank">Gantz</a></h5><hr/>
                </div>
                
              </div>
              {/* 4 */}
              <div class="row g-0">
                <div class="col-md-6">
                  <img src="https://media.kitsu.io/anime/42765/poster_image/large-5ce19551c1a6cf995b378205b9149b5c.jpeg" class="img-fluid" alt="..."/>
                </div>
                <div class="col-md-6">
                  <h5 class="card-title"><a href="https://kitsu.io/anime/jujutsu-kaisen" target="_blank">Jujutsu Kaisen</a></h5>
                </div>
                <hr/>
              </div>
              {/* 5 */}
              <div class="row g-0">
                <div class="col-md-6">
                  <img src="https://media.kitsu.io/anime/poster_images/42867/large.jpg" class="img-fluid" alt="..."/>
                </div>
                <div class="col-md-6">
                  <h5 class="card-title"><a href="https://kitsu.io/anime/dr-stone-two" target="_blank">Dr.Stone</a></h5>
                </div>
              </div>
            </div>
            <br/>



          </div>
          <div class="col-sm-10">
            <div class="row row-cols-1 row-cols-md-4 g-4">
        
              {/* card */}
              {props.items.slice(start, end).map(title => (
                <div class="col h-100">
                  <div class="home-fluid">
                    <Link to={'/anime/' + title.id}>
                      <img src={title.image_url} class="img-thumbnail" width="426" height="601.77" alt="..."/>
                    </Link>
                    <div class="card-footer">
                      <small class="text-muted">{title.name}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div class ="button-footer">
            <button class = "button-7" onClick={handlePrevious}>Previous</button>
            <button class = "button-7" onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
