module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      spacing: {
        102: "28rem",
        106: "35rem",
        110: "40rem",
      },
      colors: {
        main: "#263159",
        second: "#495579",
        third: "#251749",
        bone: "#F9F6EE",
      },
    },
    screens: {
      vvs: "350px",
      vs: "400px",
      xs: "500px",
      sm: "640px",
      md: "768px",
      nav: "800px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
  },
  plugins: [],
};
