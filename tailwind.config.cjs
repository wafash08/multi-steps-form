/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "marine-blue": "#02295a",
          "purplish-blue": "#473dff",
          "pastel-blue": "#adbeff",
          "light-blue": "#bfe2fd",
          "strawberry-red": "#ed3548",
        },
        neutral: {
          "cool-gray": "#9699ab",
          "light-gray": "#d6d9e6",
          magnolia: "#f0f6ff",
          alabaster: "#fafbff",
        },
      },
    },
  },
};
