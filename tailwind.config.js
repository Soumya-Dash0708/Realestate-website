/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   
    extend: {
      backgroundImage: {
        "banner-bg": "url('../public/bannerBg.png')",
      
      },
    
      colors: {
        hoverColor: "#ffaa17",
        darkRed: "#ea0638",
      },
    },
  },
  plugins: [],
};

