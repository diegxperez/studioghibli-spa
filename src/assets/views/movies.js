import { loadMovies } from "../../utils/utils.js";

export function showMoviesPage() {
  root.innerHTML = `
  <h2 class="text-[40px] mb-8">Movies</h2>
  <div id="wrapper-cards" class="ml-8 grid grid-cols-4 gap-x-8 gap-y-6 mr-12">`;

  loadMovies();
  history.pushState({ page: '/' }, null, '/');
}