/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // This tells Tailwind to scan your TSX files
    ],
    theme: {
      extend: {
        colors: {
          samrio: "#FF5885",
        }
      },
    },
    plugins: [],
  }