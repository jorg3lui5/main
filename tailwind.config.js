/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#6A3FB9",
        secondary: "#FF0B80",
        neutralt :{
          500:'#A9AFD9', 
          700:'#141938'
      }   
      },
    },
  },
  plugins: [],
};
