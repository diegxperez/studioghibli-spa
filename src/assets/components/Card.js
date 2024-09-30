import { MovieDetailsComponent } from "./MovieDetailsComponent.js";
import { MovieDetailsView } from "../views/movieDetailsView.js";
import { showMoviesPage } from "../views/movies.js";
import { $ } from "../../utils/utils.js";

export function Card({ movie }) {

  const card = document.createElement("div");
  card.className = "font-geistMono w-full flex flex-col gap-y-1";
  card.innerHTML = `
    <img class="w-full rounded-lg" src="${movie.image}" alt="cover-image-movie"/>
    <p class="font-medium text-lg leading-none truncate ...">${movie.title}</p>
    <p class="font-light text-base leading-none">${movie.release_date} — ${movie.running_time} Min</p>
    <a class="font-light text-base leading-none px-2.5 py-1.5 bg-brandprimary size-fit flex gap-x-1 cursor-pointer hover:bg-[#B0FFE3] transition-all ease-in duration-150 rounded-lg items-center" href='/movie/${movie.id}'>More info <img class="size-4" 
    src="./src/assets/img/play.svg"
    alt="icon-play"/></a>
 </div>`;

  hidrateCardsMovie(card, movie);
  return card
};

function hidrateCardsMovie(card, movie) {
  card.addEventListener('click', (e) => {
    e.preventDefault();

    const movieId = e.currentTarget.getAttribute('href');
    window.history.pushState(null, null, movieId);
    document.title += ` - ${movie.title}`;

    $('#root').innerHTML = MovieDetailsView;
    $('#btn-back').addEventListener('click', () => {
      history.back();
      document.title = 'Studio Ghibli API';
      showMoviesPage();
    });

    let movieDetails = document.createElement('div');
    movieDetails.innerHTML = MovieDetailsComponent({ movie });

    $('#root').append(movieDetails);
  })
}