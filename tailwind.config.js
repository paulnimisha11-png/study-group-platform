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
        // Galaxy theme colors
        'space-dark': '#0F172A',
        'space-medium': '#1E293B',
        'space-light': '#334155',
        'nebula-purple': '#8B5CF6',
        'nebula-pink': '#EC4899',
        'star-yellow': '#FBBF24',
        'star-light': '#FDE68A',
        'cosmic-blue': '#3B82F6',
        'aurora-green': '#10B981',
      },
      backgroundImage: {
        'galaxy': "radial-gradient(ellipse at top, #1E293B 0%, #0F172A 50%, #000000 100%)",
        'nebula': "radial-gradient(ellipse at center, #8B5CF6 0%, #EC4899 50%, #3B82F6 100%)",
        'starfield': "radial-gradient(2px 2px at 20px 30px, #FDE68A, transparent), radial-gradient(2px 2px at 40px 70px, #FBBF24, transparent), radial-gradient(1px 1px at 50px 50px, #FFFFFF, transparent), radial-gradient(1px 1px at 80px 10px, #FFFFFF, transparent), radial-gradient(2px 2px at 130px 80px, #FDE68A, transparent)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)' 
          },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
      },
    },
  },
  plugins: [],
}
