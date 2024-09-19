import { Card } from "./src/assets/components/Card.js";
import { $, navigateTo } from "./src/utils.js";

const wrapperCard = $("#wrapper-cards");

const URL_MOVIES = "https://ghibliapi.vercel.app/films";

fetch(URL_MOVIES)
  .then((response) => response.json())
  .then((movies) =>
    movies.forEach((movie) => {
      const cardMovie = Card({ movie });
      wrapperCard.append(cardMovie);
    }),
  );
