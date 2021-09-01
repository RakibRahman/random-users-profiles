module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "420px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "36rem",
        300: "300px",
        400: "400px",
        600: "650px",
        900: "750px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
