import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  extend:{
    colors:{
      coke:{
        accent: "#cc444b",
        background: "#38040e",
        foreground: "#edf2f4",
      }
    }
  }
  },
  plugins: [],
};
export default config;
