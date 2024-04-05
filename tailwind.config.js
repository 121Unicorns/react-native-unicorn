/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    ,
    '*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '380px',
      md: '420px',
      lg: '680px',
      // or maybe name them after devices for `tablet:flex-row`
      tablet: '1024px',
    },
    extend: {
      fontFamily: {
        display: ['OutfitBold'],
        body: ['Outfit'],
      },
      colors: {
        black: '#000',
        white: '#fff',
        neutral: {
          DEFAULT: '#94A3B8',
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F1F5F9',
          50: '#F8FAFC',
        },
        primary: {
          DEFAULT: '#FF5225',
          900: '#7E1110',
          800: '#9D100F',
          700: '#C61108',
          600: '#EF1E07',
          500: '#FE3811',
          300: '#FF9771',
          200: '#FFC2A8',
          100: '#FFE3D4',
          50: '#FFF3ED',
        },
        secondary: {
          DEFAULT: '#002C53',
          800: '#00447A',
          700: '#0F172A',
          600: '#0062B4',
          500: '#007CDF',
          400: '#009DFF',
          300: '#20B6FF',
          200: '#6DCFFF',
          100: '#B2E4FF',
          50: '#DCF1FF',
        },
        red: {
          DEFAULT: '#DC2626',
          400: '#F87171',
          50: '#FEF2F2',
        },
        amber: {
          DEFAULT: '#D97706',
          400: '#F59E0B',
          100: '#FEF3C7',
        },
        emerald: {
          DEFAULT: '#059661',
          400: '#34D399',
          50: '#ECFDF7',
        },
      },
    },
  },
  plugins: [],
};
