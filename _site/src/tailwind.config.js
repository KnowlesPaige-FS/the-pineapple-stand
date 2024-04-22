/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBackground: '#B9B1A3',
        customHeadings: '#8B8E51',
        customTexts: '#5A543D',
        customButtons: '#E1A758',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Arapey', 'serif']
      },
    },
  },
  plugins: [],
}
