/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        surface: {
          0: '#ffffff',
          50: '#fafbfc',
          100: '#f4f5f7',
          200: '#ebedf0',
          300: '#dfe1e6',
          400: '#c1c7d0',
          500: '#7a869a',
          600: '#5e6c84',
          700: '#42526e',
          800: '#253858',
          900: '#091e42',
        },
        ink: {
          50: '#f4f5f7',
          100: '#ebedf0',
          200: '#dfe1e6',
          300: '#c1c7d0',
          400: '#7a869a',
          500: '#5e6c84',
          600: '#42526e',
          700: '#253858',
          800: '#172b4d',
          900: '#091e42',
        },
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
        '4xl': '24px',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(9, 30, 66, 0.04), 0 0 1px rgba(9, 30, 66, 0.08)',
        'soft-md': '0 2px 4px rgba(9, 30, 66, 0.04), 0 0 1px rgba(9, 30, 66, 0.08)',
        'soft-lg': '0 4px 12px rgba(9, 30, 66, 0.04), 0 0 1px rgba(9, 30, 66, 0.08)',
        'soft-xl': '0 8px 24px rgba(9, 30, 66, 0.06), 0 0 1px rgba(9, 30, 66, 0.08)',
        'card': '0 0 0 1px rgba(9, 30, 66, 0.04), 0 2px 8px rgba(9, 30, 66, 0.03)',
        'card-hover': '0 0 0 1px rgba(9, 30, 66, 0.06), 0 12px 32px rgba(9, 30, 66, 0.06)',
        'glow': '0 0 40px rgba(9, 30, 66, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-scale': 'fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'draw-line': 'drawLine 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        drawLine: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};
