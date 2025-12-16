module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",        //  REQUIRED
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",        // (optional but recommended)
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "1400px",
        md: "1400px",
        lg: "1400px",
        xl: "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#0b1226",
        accent: "#ff8906",
        white: "#fff",
        gold: "#A78E63",
        'darkblue': "#122031",
        ligherblue: "#1c2833",
      },
    },
  },
  plugins: [],
};
