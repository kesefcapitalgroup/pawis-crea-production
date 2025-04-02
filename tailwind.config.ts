import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#222831', // Charcoal Black
        secondaryColor: '#F05454', // Vibrant Red
        softGray: '#DDDDDD',
        deepBlueGray: '#30475E',
      },
    },
  },
  plugins: [],
} satisfies Config;
