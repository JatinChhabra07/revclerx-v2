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
        // Brand: matches the logo gradient (deep blue → purple → magenta)
        brand: {
          blue: '#3340D4',
          indigo: '#5530CB',
          purple: '#7A2BC4',
          magenta: '#C926B8',
          pink: '#E91E83'
        },
        // Accent reads as the primary brand purple, single solid color
        accent: {
          DEFAULT: '#7A2BC4',
          hover: '#5F1FA0',
          soft: '#F6F0FE',
          line: '#E2D2F4'
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
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'gradient-x': 'gradientX 8s ease infinite'
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
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #3340D4 0%, #7A2BC4 50%, #E91E83 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, #3340D4 0%, #7A2BC4 55%, #E91E83 100%)'
      }
    }
  },
  plugins: []
}

export default config
