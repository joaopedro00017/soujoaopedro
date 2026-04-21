import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'spring-green': '#00ff7f',
        'spring-green-alpha': '#00ff80b4',
        'dark': '#1b1b1b',
        'muted': '#bebdb2',
        'light': '#eeeeee',
        'text-main': '#2e2e2e',
        'teal': '#22625f',
      },
      fontFamily: {
        varela: ['"Varela Round"', 'sans-serif'],
      },
      keyframes: {
        flutuar: {
          '0%': { top: '0px' },
          '100%': { top: '30px' },
        },
      },
      animation: {
        flutuar: 'flutuar 2s ease-in-out infinite alternate',
      },
      maxWidth: {
        'interface': '1280px',
      },
      boxShadow: {
        'footer': '0 0 40px 10px #1b1b1b',
        'card': '0 4px 8px rgba(0,0,0,0.1)',
        'hover': '0 0 20px #1b1b1b6f',
      },
    },
  },
  plugins: [],
}
export default config
