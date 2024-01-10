import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#f4f7f7",
          100: "#e2eaeb",
          200: "#c8d7d9",
          300: "#a2babe",
          400: "#75959b",
          500: "#5a7a80",
          600: "#4d666d",
          700: "#43565b",
          800: "#3c4a4e",
          900: "#354044",
          950: "#1d2427", // default
        },
        pearl: {
          50: "#f8f8f8",
          100: "#f2f2f2", // default
          200: "#dcdcdc",
          300: "#bdbdbd",
          400: "#989898",
          500: "#7c7c7c",
          600: "#656565",
          700: "#525252",
          800: "#464646",
          900: "#3d3d3d",
          950: "#292929",
        },
        azure: {
          50: "#eef6ff",
          100: "#d9e9ff",
          200: "#bcdaff",
          300: "#8ec3ff",
          400: "#59a1ff",
          500: "#2f7aff", // default
          600: "#1b5bf5",
          700: "#1446e1",
          800: "#1739b6",
          900: "#19358f",
          950: "#142257",
        },
        ruby: {
          50: "#fff0f3",
          100: "#ffdee4",
          200: "#ffc2cd",
          300: "#ff98aa",
          400: "#ff5c78",
          500: "#ff2a4f",
          600: "#f80a33",
          700: "#d90429",
          800: "#ac0824",
          900: "#8e0e24",
          950: "#4e010e",
        },
        banana: {
          "50": "#ffffea",
          "100": "#fffbc5",
          "200": "#fff885",
          "300": "#ffee46",
          "400": "#ffdf1b",
          "500": "#ffc107",
          "600": "#e29400",
          "700": "#bb6902",
          "800": "#985108",
          "900": "#7c420b",
          "950": "#482200",
        },
      },
      fontFamily: {
        noto: ["var(--font-noto)"],
        inter: ["var(--font-inter)"],
      },
      backgroundImage: {
        2022: "url('/public/2022.jpg')",
        machine: "url('/machine.webp')",
        control: "url('/control.webp')",
        circuit: "url('/circuit.webp')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
