import { $ } from "../../utils/utils.js";
import { MovieDetailsComponent } from "../components/MovieDetailsComponent.js";

export function showMovieDetails(movie) {
  const root = $('#root');
  root.innerHTML = `<div id='btn-back' class="flex items-center mb-8 gap-x-2 pointer">
  <img class="rotate-180 size-12" src="/src/assets/img/arrow-right.svg" alt="arrow right">
  <h2 class="text-[40px]">Back</h2>
  </div> `;

  let movieDetails = document.createElement('div');
  root.append(movieDetails);
  movieDetails.innerHTML = MovieDetailsComponent(movie);

  hidrateMovieDetails(movie);
};

function getLocations(movie) {
  const locationsDiv = $('#movie-locations');
  let urlMovie = `https://ghibliapi.vercel.app/films/${movie.id}`

  fetch('https://ghibliapi.vercel.app/locations/')
    .then(response => response.json())
    .then(data => {
      let locations = data.filter(location => location.films.includes(urlMovie));

      if (locations.length > 0) {
        locations.forEach(location => {
          let name = document.createElement('p');
          name.innerText = location.name;
          name.className = 'text-lg px-4';
          locationsDiv.append(name);
        });
      } else {
        locationsDiv.innerText = 'No character information found';
        locationsDiv.className = 'text-lg ml-8';
      }
    }).catch(err => console.log(`Error getting locations ${err}`));

};

function getCharacters(movie) {
  const charactersDiv = $('#movie-characters');
  const linkDefault = "https://ghibliapi.vercel.app/people/";

  const promises = movie.people.map((people) => {
    if (people !== linkDefault) {
      return fetch(people).then(response => response.json())
        .then(data => {
          let name = document.createElement('p');
          name.innerText = data.name;
          name.className = 'text-lg px-4'
          charactersDiv.appendChild(name);
        }).catch(err => console.log(`Error getting characters ${err}`));
    }
  }
  );

  Promise.all(promises).then(() => {
    if (charactersDiv.children.length === 0) {
      charactersDiv.innerText = 'No character information found';
      charactersDiv.className = 'text-lg ml-8';
    }
  });
}

function saveMovie(movie) {
  const btnMovie = $('#button-favorite');
  const starBtnMovie = $('#button-favorite-star');
  let movies = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [];
  let indexMovie = movies.findIndex((movie_localStorage) => movie_localStorage.id == movie.id);
  if (indexMovie == 0 || indexMovie > 0) {
    verifyBtnFavorite(btnMovie, starBtnMovie);
  }

  btnMovie.addEventListener('click', function () {
    let movies = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [];
    let indexMovie = movies.findIndex((movie_localStorage) => movie_localStorage.id == movie.id);
    if (indexMovie == 0 || indexMovie > 0) {
      movies.splice(indexMovie, 1)
      localStorage.setItem('movies', JSON.stringify(movies));
      toogleBtnFavorite(btnMovie, starBtnMovie);

    } else {
      movies.push(movie);
      localStorage.setItem('movies', JSON.stringify(movies));
      toogleBtnFavorite(btnMovie, starBtnMovie);

    }
  })
}

function hidrateMovieDetails(movie) {
  getCharacters(movie)
  getLocations(movie);
  saveMovie(movie);
}

function verifyBtnFavorite(btn, star) {
  console.log(btn, star);
  btn.classList.add('bg-[#edf9a4]')
  star.classList.add('fill-[#b548dd]');
}

function toogleBtnFavorite(btn, star) {
  console.log(btn, star);
  btn.classList.toggle('bg-[#edf9a4]');
  star.classList.toggle('fill-[#b548dd]');
}

// function showConfetti (){
//   confetti({
//     particleCount: 100,
//     spread: 70,
//     origin: { y: 0.6 }
//   });
// }