export function MovieDetailsComponent({ movie }) {
  return ` <div>
      <div class="ml-8 flex gap-x-24 items-center mb-8">
        <div class="w-[318px] relative">
          <img class="w-full rounded-lg" src="${movie.image}" alt="imagen-movie">
          <button id="movie-favorite"
            class="group absolute bottom-2 right-2 border-none cursor-pointer bg-white hover:bg-[#edf9a4] rounded-full p-2 transition-all ease-in duration-150">
            <svg class="fill-[#232323] group-hover:fill-[#b548dd] size-8 transition-all ease-in duration-150"
              version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128.000000 128.000000"
              preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" fill="fillCurrent" stroke="none">
                <path d="M580 1240 l0 -40 -40 0 -40 0 0 -69 0 -70 -42 -3 -43 -3 -3 -52 -3
                -53 -40 0 c-39 0 -39 0 -39 -40 l0 -40 -165 0 -165 0 0 -115 0 -115 40 0 40 0
                0 -45 0 -45 40 0 40 0 0 -275 0 -275 115 0 115 0 0 40 0 40 70 0 70 0 0 40 0
                40 110 0 110 0 0 -40 0 -40 70 0 70 0 0 -40 0 -40 115 0 115 0 0 275 0 275 40
                0 40 0 0 45 0 45 40 0 40 0 0 115 0 115 -165 0 -165 0 0 40 c0 40 0 40 -39 40
                l-40 0 -3 53 -3 52 -42 3 -43 3 0 70 0 69 -40 0 -40 0 0 40 0 40 -60 0 -60 0
                0 -40z m116 -110 l-6 -70 45 0 45 0 0 -55 0 -55 40 0 40 0 0 -45 0 -45 45 0
                45 0 0 -40 0 -40 125 0 125 0 0 -32 c0 -18 -3 -50 -6 -70 -6 -36 -8 -38 -45
                -38 -39 0 -39 0 -39 -40 l0 -40 -40 0 -40 0 0 -235 0 -235 -70 0 -70 0 0 40 0
                40 -70 0 -70 0 0 40 0 40 -110 0 -110 0 0 -40 0 -40 -70 0 -70 0 0 -40 0 -40
                -70 0 -70 0 0 235 0 235 -40 0 -40 0 0 40 c0 40 0 40 -39 40 -37 0 -39 2 -45
                38 -3 20 -6 52 -6 70 l0 32 125 0 125 0 0 40 0 40 45 0 45 0 0 45 0 45 40 0
                40 0 0 55 0 55 45 0 45 0 -6 70 -7 70 63 0 63 0 -7 -70z" />
              </g>
            </svg>
          </button>

        </div>
        <div class="w-[432px]">
          <h2 class="text-5xl mb-6">${movie.title}</h2>
          <p class="text-lg mb-6 text-graysoft text-pretty font-geistMono">${movie.description}</p>

          <div class="flex justify-between mb-6">
            <div class="flex gap-x-1 items-center">
              <img class="size-4 leading-none" src="/src/assets/img/star.svg" alt="icon star">
              <p class="text-lg font-geistMono">${movie.rt_score}</p>
            </div>

            <div class="flex gap-x-1 items-center">
              <img class="size-4 leading-none" src="/src/assets/img/clock_color.svg" alt="icon clock">
              <p class="text-lg text-graysoft font-geistMono">${movie.running_time} Min</p>
            </div>

            <div class="flex gap-x-2 items-center">
              <img class="size-4 leading-none" src="/src/assets/img/cake.svg" alt="icon cake">
              <p class="text-lg text-graysoft font-geistMono">${movie.release_date}</p>
            </div>
          </div>

          <div class="flex justify-around mb-4">
            <div>
              <h3>Director</h3>
              <p class="text-graysoft text-lg font-geistMono">${movie.director}</p>
            </div>

            <div>
              <h3>Producer</h3>
              <p class="text-graysoft text-lg font-geistMono">${movie.producer}</p>
            </div>
          </div>

        </div>
      </div>

      <div class="mb-6">
        <h4 class="text-4xl mb-4">Locations</h4>
        <div id="movie-locations" class="grid grid-cols-4 gap-y-4 ml-8">
        </div>
      </div>

      <div>
        <h4 class="text-4xl mb-4">Characters</h4>
        <div id="movie-characters" class="grid grid-cols-4 gap-y-4 ml-8">
        </div>
      </div>
    </div>`;
};