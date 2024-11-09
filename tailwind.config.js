/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        homebg: 'var(--color-home-bg)',
        // background: 'var(--color-background)',
      },
    },
  },
  plugins: [],
}

