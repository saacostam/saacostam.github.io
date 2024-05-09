/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#34d399",
          secondary: "#a3e635",
          accent: "#d946ef",
          neutral: "#1c1917",
          "base-100": "#1c1917",
          info: "#7dd3fc",
          success: "#d9f99d",
          warning: "#fde047",
          error: "#f43f5e",
        },
      },
    ],
  },
};
