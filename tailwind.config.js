/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],  // Ajusta la ruta según tu estructura de proyecto
  theme: {
    extend: {
      fontFamily: {
        dotGothic: ["DotGothic16, sans-serif"],
        geistMono: ["Geist Mono, monospace"],
      },
      colors: {
        brandprimary: "#DDF9EF",
        brandsecondary: "#FBF8EB",
        graysoft: "#575757",
      },
    },
  },
  plugins: [],
};
