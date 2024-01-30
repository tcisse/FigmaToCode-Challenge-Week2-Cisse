import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
      colors : {
        'primary-5': 'rgba(255, 111, 97, 0.05)',
        'primary-10': 'rgba(255, 111, 97, 0.10)',
        'primary-25': 'rgba(255, 111, 97, 0.25)',
        'primary-50': 'rgba(255, 111, 97, 0.50)',
        'primary-75': 'rgba(255, 111, 97, 0.75)',
        'primary' : '#FF6F61',
        'black-5': 'rgba(30, 40, 50, 0.05)',
        'black-10': 'rgba(30, 40, 50, 0.10)',
        'black-25': 'rgba(30, 40, 50, 0.25)',
        'black-50': 'rgba(30, 40, 50, 0.50)',
        'black-75': 'rgba(30, 40, 50, 0.75)',
        'black': '#1E2832',
        'white-5': 'rgba(255, 255, 255, 0.05)',
        'white-10': 'rgba(255, 255, 255, 0.10)',
        'white-25': 'rgba(255, 255, 255, 0.25)',
        'white-50': 'rgba(255, 255, 255, 0.50)',
        'white-75': 'rgba(255, 255, 255, 0.75)',
        'white': '#FFFFFF',
        'dark-5': 'rgba(0, 0, 0, 0.05)',
        'dark-10': 'rgba(0, 0, 0, 0.10)',
        'dark-25': 'rgba(0, 0, 0, 0.25)',
        'dark-50': 'rgba(0, 0, 0, 0.50)',
        'dark-75': 'rgba(0, 0, 0, 0.75)',
        'dark': '#000000',
        'stroke': '#E3E3E3',

      }
    },
  },
  plugins: [],
};
export default config;
