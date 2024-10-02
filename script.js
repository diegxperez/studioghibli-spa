// import { Card } from "./src/assets/components/Card.js";
import { $, $$, navigateTo } from "./src/utils/utils.js";
import { showMoviesPage } from "./src/assets/views/movies.js";

showMoviesPage();

$$('a').forEach((el) => el.addEventListener('click', function (e) {
  e.preventDefault();
  let href = e.currentTarget.getAttribute('href');
  navigateTo(href)
}))
// let href = target.getAttribute('href');

// TODO: Characters view / Locations View / Favorites View
// TODO: Agregar funciones a Favorites View
// TODO: Hacer un popstate + pushState state
