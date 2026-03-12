import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        forest: { DEFAULT: '#2b4f3d', dark: '#1e3a2b', mid: '#3d6b52' },
        cream: { DEFAULT: '#f7f0e1', dark: '#ede7d4' },
        teal: { DEFAULT: '#a8dadc', deep: '#6bb8bd', glow: '#c5e9eb' },
        charcoal: '#1a2421',
        'warm-white': '#fdfaf4',
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: []
} satisfies Config
