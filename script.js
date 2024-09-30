// import { Card } from "./src/assets/components/Card.js";
import { $, $$, popState } from "./src/utils/utils.js";
import { showMoviesPage } from "./src/assets/views/movies.js";
// import { popState } from "./src/utils/utils.js";

const root = $("#root");

showMoviesPage();

$$('a').forEach((el) => el.addEventListener('click', function (e) {
  e.preventDefault();
  let href = e.currentTarget.getAttribute('href');
  // let href = target.getAttribute('href');
  switch (href) {
    case '/':
      showMoviesPage();
      break;
    // case '/characters':
    // case '/locations':
    // case '/favorites':
  }
}))

// popState();
