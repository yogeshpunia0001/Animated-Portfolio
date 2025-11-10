/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#059669',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#10b981',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#34d399',
          foreground: '#ffffff',
        },
        background: '#ffffff',
        foreground: '#1f2937',
        card: {
          DEFAULT: '#f0fdf4',
          foreground: '#1f2937',
        },
        muted: {
          DEFAULT: '#f0fdf4',
          foreground: '#6b7280',
        },
        border: '#e5e7eb',
        input: '#ffffff',
        ring: 'rgba(5, 150, 105, 0.5)',
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
    },
  },
  plugins: [],
}
