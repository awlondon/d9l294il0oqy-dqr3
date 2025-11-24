/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}", "./src/styles/**/*.{js,jsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Montserrat"', 'system-ui', 'sans-serif'],
        body: ['"Roboto"', 'system-ui', 'sans-serif'],
        accent: ['"Libre Baskerville"', 'serif']
      },
      colors: {
        brand: {
          sage: '#D8E3D0',
          pine: '#4A5B45',
          sand: '#F6F0E8',
          sunset: '#E7BDB0',
          espresso: '#3B2F2F'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
};
