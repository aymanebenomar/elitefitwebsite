/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        eliteGold: "#FFD700",
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'scroll-infinite': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-20%)' },
        },
        'scroll-infinite-reverse': {
          '0%': { transform: 'translateX(-20%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        'scroll-infinite': 'scroll-infinite 20s linear infinite',
        'scroll-infinite-reverse': 'scroll-infinite-reverse 20s linear infinite',
      },
    },
  },
  plugins: [],
}