import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        coke: {
          accent: '#cc444b',
          background: '#38040e',
          foreground: '#edf2f4',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui(), require('tailwind-scrollbar')],
};
export default config;
