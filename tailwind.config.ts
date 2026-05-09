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
        cream: {
          DEFAULT: '#fbfaf6',
          50: '#fefdfa',
          100: '#fbfaf6',
          200: '#f5f2ea',
          300: '#ede8db',
          400: '#dcd5c2'
        },
        ink: {
          950: '#050505',
          900: '#0a0a0a',
          800: '#1a1a1a',
          700: '#2a2a2a',
          600: '#3d3d3d'
        },
        line: '#e5e2db',
        lineStrong: '#d0ccc1',
        muted: '#6b6457',
        body: '#2a2a2a',
        accent: {
          DEFAULT: '#1f4d3a',
          hover: '#163829',
          soft: '#edf3ef',
          line: '#cfdcd5'
        }
      },
      maxWidth: {
        '7xl': '80rem',
        '8xl': '88rem'
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'shimmer': 'shimmer 2.4s linear infinite',
        'spin-slow': 'spin 22s linear infinite',
        'marquee': 'marquee 38s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite'
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' }
        }
      }
    }
  },
  plugins: []
}

export default config
