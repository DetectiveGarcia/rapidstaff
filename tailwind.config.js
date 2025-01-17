/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'dynamic': 'clamp(2rem, 2rem + 1vw, 4.5rem)', // Add your custom font size
      },
    },
  },
  plugins: [],
};
