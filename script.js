// import { Card } from "./src/assets/components/Card.js";
import { $, $$ } from "./src/utils/utils.js";
import { showMoviesPage } from "./src/assets/views/movies.js";

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

// TODO: Hidratar el boton y insertar confetti
// TODO: Hacer el localStorage, guardar en favoritos
// TODO: Hacer un popstate + pushState state
