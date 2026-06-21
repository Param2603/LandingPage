/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#81B64C',
        secondary: '#5D9948',
        accent: '#FFD54A',
        lightBg: '#F8FAFC',
        lightSurface: '#FFFFFF',
        darkBg: '#0F172A',
        darkSurface: '#1E293B',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        pulseSlow: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounceSlow: 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}
