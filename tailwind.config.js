/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}", "./@/components/**/*.{ts,tsx}"],
  plugins: [require("tailwindcss-animate")],
};
