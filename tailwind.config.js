/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      screens: {
        "2xl": "2200px",
      },
      colors: {
        accent: {
          DEFAULT: "#173F58",
        },
        success: {
          DEFAULT: "#23C552",
        },
        error: {
          DEFAULT: "#FF0101",
        },
        gray: {
          50: "#F8F7F4",
          100: "#EDECE8",
          150: "#E6E5E2",
          200: "#CFCEC9",
          300: "#BAB9B5",
          400: "#A7A5A0",
          500: "#91908D",
          600: "#7D7C78",
          700: "#686764",
          800: "#535350",
          900: "#1F1F1E",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontWeight: {
        DEFAULT: 300,
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
        // Your custom aliases
        rg: 300,
        md: 500,
        sb: 600,

        // You can also add more precise weights if needed
        // '350': 350,
        // '450': 450,
        // etc.
      },
      fontSize: {
        8: "8px",
        12: "12px",
        16: "16px",
        20: "20px",
        24: "24px",
        28: "28px",
        32: "32px",
        48: "48px",
        64: "64px",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  safelist: [
    "md:text-[16px]",
    "md:text-[20px]",
    "md:text-[24px]",
    "md:text-[28px]",
    "md:text-[48px]",
    "md:text-[32px]",
    "md:text-[64px]",
    "text-[20px]",
    "text-[48px]",
    "text-[32px]",
    "text-[64px]",
    "text-[16px]",
    "font-sans",
    "font-serif",
    "font-rg",
    "text-accent-light",
    "text-gray-200",
    "bg-gradient-to-t",
    "bg-gradient-to-b",
    "bg-gradient-to-l",
    "bg-gradient-to-r",
    "bg-gradient-to-tr",
    "bg-gradient-to-tl",
    "bg-gradient-to-br",
    "bg-gradient-to-bl",
    "from-accent",
    "to-transparent",
    "to-white",
  ],
};
