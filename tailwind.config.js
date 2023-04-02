/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    
    extend: {
      fontFamily: {
        'sans': ['"League Spartan"', 'sans-serif'],
        'serif': ['"League Spartan"', 'sans-serif'],
        'mono': ['"League Spartan"', 'sans-serif'],
      },
      fontSize: {
        "base": '15px',
        '3xl': '1.953rem',
        '4xl': '3rem',
        '5xl': '4rem',
      },
    },
  },
  plugins: [],
}

