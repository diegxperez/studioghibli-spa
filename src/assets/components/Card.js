export function Card({ movie }) {
  const card = document.createElement("div");
  card.className = "font-geistMono w-[200px] flex flex-col gap-y-1";

  card.innerHTML = `
    <img class="w-full rounded-lg" src="${movie.image}" alt="cover-image-movie"/>
    <p class="font-medium text-lg leading-none truncate ...">${movie.title}</p>
    <p class="font-light text-base leading-none">${movie.release_date} — ${movie.running_time}</p>
    <a class="font-light text-base leading-none px-2.5 py-1.5 bg-brandprimary size-fit flex gap-x-1 cursor-pointer hover:bg-[#B0FFE3] transition-all ease-in duration-150 rounded-lg items-center" href='/movie/${movie.id}''>More info <img class="size-4" 
    src="./src/assets/img/play.png"
    alt="icon-play"/></a>
    </div>`;

  return card;
}
