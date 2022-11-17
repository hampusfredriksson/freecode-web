/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-freecode": "#4e2465",
        linkedin: "#0072b1",
        mail: "#DB4437",
        discord: "#7289DA",
        twitter: "#1DA1F2",
      },
    },
  },
  plugins: [],
};
