/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0E1116',
          900: '#12151B',
          800: '#181C23',
          700: '#232833',
          600: '#3A4150',
        },
        bone: {
          100: '#EDEBE4',
          300: '#C9C6BC',
          500: '#8B9099',
        },
        signal: {
          green: '#2FD48F',
          greendim: '#1D8F63',
          red: '#E86A5C',
          reddim: '#8C4239',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
