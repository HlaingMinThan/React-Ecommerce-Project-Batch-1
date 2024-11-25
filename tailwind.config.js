/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0285FF",
        secondary: "#20283F",
      },
    },
  },
  plugins: [],
};
