/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: { DEFAULT: '#8FA89B', dark: '#7A9A8B' },
        mint: { light: '#F0F5F2', DEFAULT: '#EAF2ED' },
        cream: { light: '#FDFBF7', DEFAULT: '#FAF8F5' },
        blush: { DEFAULT: '#E8C5B8', dark: '#DFA89B' },
        charcoal: '#2D3732',
        brass: '#C5A880',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

