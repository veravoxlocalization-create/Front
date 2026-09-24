/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          600: '#3f3f46',
          700: '#27272a',
          900: '#121214',
          950: '#09090b',
        },
        bone: {
          100: '#f4f4f5',
          300: '#d4d4d8',
          500: '#71717a',
          600: '#52525b',
        },
        signal: {
          green: '#10b981',
          red: '#f43f5e',
        },
      },
    },
  },
  plugins: [],
};
