// Utility
export const $ = (el) => document.querySelector(el);

// Import
import { Card } from "../assets/components/Card.js";

// Navigation
export function navigateTo(url) {
  window.history.pushState(null, null, url);

  switch (window.location.pathname) {
    case "/":
      root.innerHTML = moviesUI;
      break;
    case "/characters":
      // root.innerHTML = UI;
      break;
    case "/locations":
      // root.innerHTML = UI;
      break;
  }
}

// Load movies
const URL_MOVIES = "https://ghibliapi.vercel.app/films";

export function loadMovies() {
  const wrapperCard = $("#wrapper-cards");

  fetch(URL_MOVIES)
    .then((response) => response.json())
    .then((movies) =>
      movies.forEach((movie) => {
        const cardMovie = Card({ movie });
        wrapperCard.append(cardMovie);
      }),
    )
};
