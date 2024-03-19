import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
     screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
      '5xl': '3840px',
      },
    extend: {
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      animation: {
        slideUp: "slideUp 0.5s ease-out",
        slideDown: "slideDown 0.5s ease-in forwards",
        fadeOutCenter: "fadeOutCenter 0.5s ease-in forwards",
        scrollText: "scrollText 10s linear infinite",
      },
      spacing: {
        card: "0.5rem",
      },
      transitionDuration: {
        custom: "500ms",
      },
      width: {
        hamburger: "250px",
      },
      translate: {
        "2/5": "20%",
        "2/4": "200%",
        "12/12": "220%",
      },
      colors: {
        "primary-purple": "#4D194D",
        "secondary-color": "#f7cbc7",
        "footer-pink": "#ffe3f9",
        "online-state": "#57f000",
        "offline-state": "#c3282a",
        "input-bg": "#fef2f2",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-custom": "linear-gradient(90deg, #4D194D 0%, #6D2E46 80%)",
        "custom-gradient": "linear-gradient(360deg, #6D2E46 10%, #4D194D 90%)",
      },
      fontFamily: {
        "playfair-display": ["Playfair Display", "serif"],
        Quicksand: ["Quicksand", "sans-serif"],
      },
      screens: {
        xs: "468px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
