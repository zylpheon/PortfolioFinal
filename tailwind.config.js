/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
      },
      colors: {
        bg: '#F2F0EB',
        surface: '#E8E6E0',
        border: 'rgba(17,17,17,0.12)',
        ink: '#111111',
        'ink-secondary': '#4A4845',
        'ink-muted': '#8A8783',
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      fontWeight: {
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
      },
    },
  },
  plugins: [],
}
