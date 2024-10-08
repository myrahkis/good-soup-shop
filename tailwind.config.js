/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "background-color": "#fff4f4",
      "light-bg-color": "#FFFCFC",
      "dark-bg-color": "#ffe4e5",
      "secondary-color": "#e58b8e",
      "main-color": "#c25e67",
      "emphasis-color": "#007678",
      "dark-text-color": "#252525",
      "light-text-color": "#fff3f3",
    },
    screens: {
      large: { max: "1199px" },
      medium: { max: "991px" },
      small: { max: "767px" },
      "extra-small": { max: "575px" },
    },
    extend: {
      cursor: {
        default: "url(/spoon.svg), default",
        text: "url(/fork.svg), text",
      },
    },
  },
  plugins: [],
};
