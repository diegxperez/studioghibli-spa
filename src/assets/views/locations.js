import { hidrateBtnBack, loadInfo } from "../../utils/utils.js";

export function showLocationsPage() {
  root.innerHTML =
    `<div id='btn-back' class="flex items-center mb-8 gap-x-2 cursor-pointer">
    <img class="rotate-180 size-12" src="/src/assets/img/arrow-right.svg" alt="arrow right">
    <h2 class="text-[40px]">Locations</h2></div>
    <div id="name-locations" class="ml-8 grid grid-cols-4 gap-x-8 gap-y-6 mr-12 ">
    `;

  hidrateBtnBack();
  loadInfo('https://ghibliapi.vercel.app/locations', '#name-locations');
  history.pushState({ page: '/locations' }, null, '/locations')
}  