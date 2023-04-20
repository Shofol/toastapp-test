/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "tst-bg": "#F0F3F3",
        "tst-light-bg": "#F5F5F5",
        "tst-gray-bg": "#F1F1F1",
        "tst-scndry": "#4A5662",
        "tst-primary": "#3CBCB4",
        "tst-card-bg": "#F6F6F6",
      },
      borderRadius: {
        "2lg": ".625rem",
      },
      fontFamily: {
        graphik: ["Graphik"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
