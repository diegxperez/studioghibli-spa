import { $ } from "../../utils/utils.js";
import { MovieDetailsComponent } from "../components/MovieDetailsComponent.js";

export function showMovieDetails({ movie }) {
  const root = $('#root');
  root.innerHTML = `<div id='btn-back' class="flex items-center mb-8 gap-x-2 pointer">
  <img class="rotate-180 size-12" src="/src/assets/img/arrow-right.svg" alt="arrow right">
  <h2 class="text-[40px]">Back</h2>
  </div> `;

  let movieDetails = document.createElement('div');
  root.append(movieDetails);
  movieDetails.innerHTML = MovieDetailsComponent({ movie });

  getCharacters({ movie })

};

// movie-locations movie-characters
function getLocations() {

}

function getCharacters({ movie }) {
  movie.people.forEach((people) => {
    const linkDefault = "https://ghibliapi.vercel.app/people/";
    if (people !== linkDefault) {
      fetch(people).then(response => response.json())
        .then(data => {
          let name = document.createElement('p');
          name.innerText = data.name;
          name.className = 'text-lg px-4'
          $('#movie-characters').append(name);
        });
    }
  });

}


// TODO: Hacer un popstate + pushState state
// function hidrateMovieDetails (){
//     // console.log(window.history.state.data);

//     $('#btn-back').addEventListener('click', () => {
//       history.back();
//       document.title = 'Studio Ghibli API';
//       showMovieDetails({ movie });
//     });
// }