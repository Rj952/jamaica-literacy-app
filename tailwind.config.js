/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#071A10',
          900: '#0F2D1E',
          800: '#1D4E3E',
          700: '#2A6B52',
          600: '#38896A',
          500: '#47A882',
          400: '#6CC19F',
          300: '#96D4BB',
          200: '#B5DDCA',
          100: '#DCEFEB',
          50:  '#F0FAF5',
        },
        gold: {
          900: '#5C3D09',
          700: '#92681A',
          600: '#B8922B',
          500: '#C8A951',
          400: '#D4BC74',
          300: '#E0CE97',
          200: '#EDE0BC',
          100: '#F8F0D6',
          50:  '#FDF9EE',
        },
        tech: {
          900: '#0C4A6E',
          700: '#0369A1',
          600: '#0284C7',
          500: '#0EA5E9',
          400: '#38BDF8',
          300: '#7DD3FC',
          100: '#E0F2FE',
          50:  '#F0F9FF',
        },
        cream: '#FAFDF7',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'card':  '0 2px 8px -2px rgba(15, 45, 30, 0.12), 0 0 1px rgba(15,45,30,0.06)',
        'card-hover': '0 8px 24px -4px rgba(15, 45, 30, 0.18), 0 0 1px rgba(15,45,30,0.08)',
        'sidebar': '2px 0 16px rgba(15, 45, 30, 0.12)',
      },
      backgroundImage: {
        'leaf-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A951' fill-opacity='0.07'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}