import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function Home(props) { 
  // How to fetch database records independently without looping
  // want to create a card but without having to use .map to paste the images
  return (
    <div>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
      {props.items.map(title => (
          <div class="carousel-item active">
            <img src={title.image_url} class="d-block w-100" height ="150" width ="150" alt="..."/>
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
      {props.items.map(title => (
        <div key = {title.id}>
          <div class = "container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card h-100">
                  <img src={title.image_url} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">{title.name}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
