/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
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


