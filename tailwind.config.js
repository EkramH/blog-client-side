/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      blackCoral: "#495867ff",
      blueYonder: "#577399ff",
      beauBlue: "#bdd5eaff",
      ghostWhite: "#f7f7ffff",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
