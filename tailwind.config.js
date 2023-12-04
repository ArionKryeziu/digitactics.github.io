module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#C3EAE4",
        accent: "#ffffff",
      },
      backgroundImage: {
        site: "url('./assets/testbg2.png')",
        about: "url('./assets/Digital-Marketing-PNG-Picture.png')",
        services: "url('./assets/colorsremoved.png') ",
      },
    },
  },
  plugins: [],
};
