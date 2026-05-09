import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-grotesk)', 'var(--font-inter)', 'system-ui', 'sans-serif']
      },
      colors: {
        cream: '#f9f7f3',
        ink: '#1C1C1C',
        body: '#3a3a3a',
        muted: '#767069',
        rule: '#ebe6dd',
        ruleStrong: '#d4cfc4',
        accent: '#ff5a1f'
      },
      maxWidth: {
        '7xl': '80rem'
      }
    }
  },
  plugins: []
}

export default config
