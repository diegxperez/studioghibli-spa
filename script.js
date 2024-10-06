// import { Card } from "./src/assets/components/Card.js";
import { $, $$, navigateTo } from "./src/utils/utils.js";
import { showMoviesPage } from "./src/assets/views/movies.js";
import { showMovieDetails } from "./src/assets/views/movieDetails.js";

showMoviesPage();

$$('a').forEach((el) => el.addEventListener('click', function (e) {
  e.preventDefault();
  let href = e.currentTarget.getAttribute('href');
  history.pushState({ page: href }, null, href);
  navigateTo(href)
}))

window.addEventListener('popstate', (e) => {
  e.preventDefault();
  const previousState = e.state;

  if (previousState) {
    if (previousState.page) {
      navigateTo(previousState.page)
    } else if (previousState.data) {
      showMovieDetails(previousState.data);
    }
  } else {
    navigateTo('/')
  }
});

// TODO: Characters view / Locations View / Favorites View
// TODO: Agregar funciones a Favorites View
// TODO: Hacer un popstate + pushState state
