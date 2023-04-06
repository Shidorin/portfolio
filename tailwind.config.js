module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "rgb(13, 15, 17)",
        bgColor: "white",
        primaryText: "#3182ce",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
