module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  //darkMode: 'media', // or 'class' for manual dark mode toggling
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ...other shades
          600: '#0284c7', // primary color
          700: '#0369a1',
        },
      },
    },
  },
  plugins: [],
}
