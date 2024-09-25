import { Card } from "./src/assets/components/Card.js";
import { $, loadMovies } from "./src/utils/utils.js";
import { moviesUI } from "./src/assets/views/movies.js";

const root = $("#root");
// root.innerHTML = moviesUI;

function navigateTo(url) {
  window.history.pushState(null, null, url);

  switch (window.location.pathname) {
    case "/":
      root.innerHTML = moviesUI;
      loadMovies();
      break;
    case "/characters":
      // root.innerHTML = UI;
      break;
    case "/locations":
      // root.innerHTML = UI;
      break;
  }
}


navigateTo(window.location.pathname);

window.addEventListener('popstate', function () {

});





