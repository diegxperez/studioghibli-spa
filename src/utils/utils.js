// Utility
export const $ = (el) => document.querySelector(el);
export const $$ = (el) => document.querySelectorAll(el);
export const root = $('root');
// Import UI
// import { moviesUI } from "../assets/views/movies.js";
import { charactersUI } from "../assets/views/characters.js";
import { favoritesUI } from "../assets/views/favorites.js";
import { locationsUI } from "../assets/views/locations.js";

// Import Components
import { Card } from "../assets/components/Card.js";

// Navigation
// export function navigateTo(url) {
//   window.history.pushState(null, null, url);

//   switch (window.location.pathname) {
//     case "/":
//       root.innerHTML = moviesUI;
//       loadMovies();
//       break;
//     case "/characters":
//       if (charactersUI) {
//         root.innerHTML = charactersUI;
//       } else {
//         console.error("charactersUI is not defined");
//       }
//       break;
//     case "/locations":
//       if (locationsUI) {
//         root.innerHTML = locationsUI;
//       } else {
//         console.error("locationsUI is not defined");
//       }
//       break;
//     case "/favorites":
//       if (favoritesUI) {
//         root.innerHTML = favoritesUI;
//       } else {
//         console.error("favoritesUI is not defined");
//       }
//       break;
//   }
// }

// Popstate
export function popState() {
  const TITLE = 'Studio Ghibli API';
  window.addEventListener('popstate', (e) => {
    switch (window.location.pathname) {
      case '/':
        root.innerHTML = moviesUI
        document.title = TITLE;
        break;
    }
  });
};
// Load movies
export function loadMovies() {
  const URL_MOVIES = "https://ghibliapi.vercel.app/films";
  const wrapperCard = $("#wrapper-cards");

  fetch(URL_MOVIES)
    .then((response) => response.json())
    .then((movies) =>
      movies.forEach((movie) => {
        const cardMovie = Card(movie);
        wrapperCard.append(cardMovie);
      }),
    )
};
