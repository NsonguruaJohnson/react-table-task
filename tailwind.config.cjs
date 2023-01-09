/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ACCCC9",
        green: "#4BB064",
        dull: "#ffffffad",
        topColor: "#022B23",
        bottomColor: "#000000F5",
        secondary: "#B6BBD1",
        dark_gradient:
          "linear-gradient(180deg, #022B23 32.54%, rgba(0, 0, 0, 0.96) 106.94%)",
      },

      backgroundImage: {
        "connect-pattern": "url('/images/connect.png')",
      },

      boxShadow: {
        "3xl": "0px 4px 8px rgba(0, 0, 0, 0.05)",
        lightShadow: "3px 3px 10px rgb(0 184 211 / 50%)",
      },
      fontFamily: {
        "gorgagrotesque-bold": ["gorgagrotesque-bold"],
        "gorgagrotesque-bold-italic": ["gorgagrotesque-bold-italic"],
        "gorgagrotesque-italic": ["gorgagrotesque-italic"],
        "gorgagrotesque-light": ["gorgagrotesque-light"],
        "gorgagrotesque-light-italic": ["gorgagrotesque-light-italic"],
        "gorgagrotesque-regular": ["gorgagrotesque-regular"],
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
