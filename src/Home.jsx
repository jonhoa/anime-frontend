import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function Home(props) { 
  // what happens if i have 200 records? will it create 200 carousel images? if so how can i limit it to only 3!
  return (
    <div>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          {props.items.map(title => (
            <div class="carousel-item active">
              <img src={title.image_url} class="d-block w-100" height ='300' alt="..."/>
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
      {/* card */}
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {props.items.map(title => (
          <div class="col h-100">
            <div>
              <img src={title.image_url} class="img-thumbnail" height ="150" alt="..."/>
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
