// Utility
export const $ = (el) => document.querySelector(el);
export const $$ = (el) => document.querySelectorAll(el);
export const root = $('root');

// Import UI
import { showMoviesPage } from "../assets/views/movies.js";
import { showCharactersPage } from "../assets/views/characters.js";
import { showLocationsPage } from "../assets/views/locations.js";
import { showFavoritesPage } from "../assets/views/favorites.js";

// Import Components
import { Card } from "../assets/components/Card.js";

// Navigation
export function navigateTo(url) {
  switch (url) {
    case '/':
      showMoviesPage();
      break;
    case '/characters':
      showCharactersPage();
      break;
    case '/locations':
      showLocationsPage();
      break;
    case '/favorites':
      showFavoritesPage();
      break;
  }
}

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

export function loadFavoritesMovies() {
  const wrapperCard = $("#wrapper-cards");
  let movies = JSON.parse(localStorage.getItem('movies')) || false;

  if (movies) {
    movies.forEach((movie) => {
      const cardMovie = Card(movie);
      wrapperCard.append(cardMovie);
    })
  }
}

export function loadInfo(url, wrapper) {
  fetch(url).
    then((response) => response.json()).
    then((data) =>
      data.forEach(item => {
        let itemDiv = document.createElement('p');
        itemDiv.innerText = item.name;
        itemDiv.className = 'text-lg px-4 hover:bg-[#F0C9C5] transition-all ease-in duration-150';
        $(wrapper).appendChild(itemDiv);
      })
    ).catch(err => console.log(`Error : ${err}`));
}