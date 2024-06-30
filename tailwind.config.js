/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        purple: "1px 1px 25px 1px #A445ED",
      },
    },
  },
  plugins: [],
};
