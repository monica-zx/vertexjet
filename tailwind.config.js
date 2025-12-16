module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
      screens:{
        sm: '1400px',
        md: '1400px',
        lg: '1400px',
        xl: '1400px',
      }, // centers the container   
    },

    extend: {
      colors: {
        primary: '#0b1226',      
        accent: '#ff8906',  
        white:'#fff',
        gold:'#A78E63',     // CTA color
      },
    },
  },
  plugins: [],
};
