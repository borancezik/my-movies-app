/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "add-banner":
          "url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/ayUMWKe6Wow5ixLlKxxlp7IqTiI.jpg')",
      },
    },
  },
  plugins: [],
};
