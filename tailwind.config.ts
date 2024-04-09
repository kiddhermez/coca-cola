import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#25232e",
            foreground: "#fff",
            primary: "#2e2323",
            secondary: "#05f",
          },
        },
        light: {
          colors: {
            background: "#fff",
            foreground: "#000",
            primary: "#fed8d8",
            secondary: "#05f",
          },
        },
      },
    }),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
export default config;
