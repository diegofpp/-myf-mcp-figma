/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'mobile': '390px',
        'tablet': '810px', 
        'desktop': '1200px',
      },
      colors: {
        background: {
          DEFAULT: '#0A0B0A',
          muted: '#181818',
        },
        text: {
          DEFAULT: '#EFE7D2',
        },
      },
    },
  },
  plugins: [],
}