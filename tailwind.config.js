/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        main: '90vh',
        header: '10vh',
        fullx2: '200vh',
      },
      width: {
        load: '200vw',
        hero: '600px',
      },
      colors: {
        red: '#E63946',
        cream: '#F1FAEE',
        sea: '#A8DADC',
        blue: '#457B9D',
        navyblue: '#1D3557',
      },
      padding: {
        half: '50%',
      },
      screens: {
        '2xl': '1600px',
        tall: '1800px',
      },
    },
  },
  plugins: [],
};
