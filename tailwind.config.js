/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "background-color": "#fff4f4",
      "light-bg-color": '#FFFCFC',
      "secondary-color": "#e58b8e",
      "main-color": "#c25e67",
      "emphasis-color": "#007678",
      "dark-text-color": "#252525",
      "light-text-color": "#fff3f3",
    },
    screens: {
      large: "992px",
      medium: "768px",
      small: "576px",
      "extra-small": "320px",
    },
  },
  plugins: [],
};
