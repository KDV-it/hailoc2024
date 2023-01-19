/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      'ss': '300px',
      'lg': '1024px'
    },
    extend: {
      backgroundImage: {
        'pc': "url('../public/img/BG-PC.png')",
        'mb': "url('../public/img/BG-MB.png')",
      }
    },
  },
  plugins: [],
}
