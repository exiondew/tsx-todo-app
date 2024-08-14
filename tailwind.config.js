/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        eee: "#eeeeee",
        bg: "#201E43",
        todo: "#508C9B",
        "todo-bg": "#134B70",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
