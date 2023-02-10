import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AnimeShow } from "./AnimeShow";
import { Link } from "react-router-dom";

export function Home(props) { 
  // what happens if i have 200 records? will it create 200 carousel images? if so how can i limit it to only 3!
  return (
    <div>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          {props.items.map(title => (
            <div class="carousel-item active">
              <Link to={'/anime/' + title.id}>
                <img src={title.image_url} class="d-block w-100" height ='300' alt="..."/>
              </Link>
            </div>
          ))}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      
      {/* popular tab --fix later*/}
      <div class="row row-cols-1 row-cols-md-4 g-4">
        {/* <div class="card">
          <div class="card-header">Popular</div> */}
        {/* <ul class="list-group list-group-flush"> */}
        {/* <li class="list-group-item">
              <div class="row row-cols-1">
                <div class="col-md-4">
                  <img src="https://samdrewtakeson.com/wp-content/uploads/2022/11/Bleach-Thousand-Year-Blood-War-Episode-9-Release-Date-800x600.jpg" class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title" align ="right">Bleach</h5>
                  </div>
                </div>
              </div>
            </li> */}

        {/* <li class="list-group-item">
              <div class="row row-cols-1">
                <div class="col-md-4">
                  <img src="https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2021/10/Mob-Psycho-100-Season-3-1-scaled-e1634624616827.jpg" class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title" align ="right">Mob Pyscho</h5>
                  </div>
                </div>
              </div>
            </li>
            
          </ul> */}
        {/* </div> */}
        <div class="card">
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
                <h5 class="card-title">Mob Psycho 100 III</h5>
                <hr/>
              </div>
            </div>
          </div>

          <div class="row g-0">
            <div class="col-md-4">
              <img src="https://gamerbraves.sgp1.cdn.digitaloceanspaces.com/2021/11/gantz.jpg" class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Gantz</h5>
                <hr/>
              </div>
            </div>
          </div> 
        </div>
       
         






        
        {/* card */}
        {props.items.map(title => (
          <div class="col h-100">
            <div>
              <Link to={'/anime/' + title.id}>
                <img src={title.image_url} class="img-thumbnail" height ="150" alt="..."/>
              </Link>
              <div class="card-footer">
                <small class="text-muted">{title.name}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
