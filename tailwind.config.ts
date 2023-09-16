import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      gray: '#F9FAFB',
      'gray-dark': '#D1D5DB',
      'gray-light': '#E5E7EB',
      green: '#22C55E',
      blue: '#3B82F6',
      'blue-light': '#60A5FA',
      red: '#EF4444',
      'red-light': '#FECACA',
      'red-extra-light': '#FEF2F2',
    },
    fontSize: {
      xs: ['10px', '12px',],
      sm: ['16px', 'normal'],
      md: ['16px', '18px'],
      lg: ['18px', 'normal'],
      xl: ['20px', 'normal'],
      '2xl': ['32px', '32px']
    },
    extend: {
      backgroundImage: {
        'background-btn': 'linear-gradient(0deg, #60A5FA 0%, #60A5FA 100%), #60A5FA',
      },
    },
  },
  plugins: [],
}
export default config
