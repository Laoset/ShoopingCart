/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      backgroundImage: {
        fondo: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
      },
      colors: {
        fondoOpaco: "#C8C8C8",
        fondoNuevo: "#404258",
        nuevoBoton: "#DD936B",
        nuevoBoton2: "#ea7067",
        fondoEpic: "#ebebeb",
      },
      boxShadow: {
        "3xl": "0px 5px 15px rgba(0,0,0,0.35)",
      },
    },
    fontFamily: {
      marca: ["Kdam Thmor Pro"],
    },
  },
  plugins: [],
};
