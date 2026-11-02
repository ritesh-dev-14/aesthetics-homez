/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F7F3',
        ink: '#171713',
        gold: '#B99A16',
        'gold-dark': '#92770C',
        sand: '#EAE5D9'
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'Arial', 'sans-serif']
      },
      boxShadow: { soft: '0 20px 60px rgba(25, 22, 12, .08)' }
    }
  },
  plugins: []
}
