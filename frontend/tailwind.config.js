/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        background: 'oklch(var(--background) / <alpha-value>)',
        foreground: 'oklch(var(--foreground) / <alpha-value>)',
        card: {
          DEFAULT: 'oklch(var(--card) / <alpha-value>)',
          foreground: 'oklch(var(--card-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'oklch(var(--popover) / <alpha-value>)',
          foreground: 'oklch(var(--popover-foreground) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        success: {
          DEFAULT: 'oklch(0.52 0.18 145)',
          light: 'oklch(0.92 0.08 145)',
          foreground: 'oklch(0.98 0.005 145)',
        },
        alert: {
          DEFAULT: 'oklch(0.55 0.22 25)',
          light: 'oklch(0.94 0.08 25)',
          foreground: 'oklch(0.98 0.005 25)',
        },
        gold: {
          DEFAULT: 'oklch(0.75 0.12 75)',
          light: 'oklch(0.92 0.06 75)',
          dark: 'oklch(0.55 0.10 75)',
        },
        navy: {
          DEFAULT: 'oklch(0.22 0.06 240)',
          light: 'oklch(0.30 0.06 240)',
        },
        surface: {
          DEFAULT: 'oklch(0.97 0.003 240)',
          elevated: 'oklch(0.99 0.002 240)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 2px 8px oklch(0.15 0.02 240 / 0.06), 0 8px 32px oklch(0.15 0.02 240 / 0.08)',
        'card-elevated': '0 4px 16px oklch(0.15 0.02 240 / 0.08), 0 16px 48px oklch(0.15 0.02 240 / 0.12)',
        'card-hover': '0 8px 24px oklch(0.15 0.02 240 / 0.12), 0 24px 64px oklch(0.15 0.02 240 / 0.16)',
        'navbar': '0 1px 0 oklch(0.75 0.12 75 / 0.15), 0 4px 24px oklch(0.15 0.02 240 / 0.06)',
        'glow-success': '0 0 24px oklch(0.52 0.18 145 / 0.3)',
        'glow-alert': '0 0 24px oklch(0.55 0.22 25 / 0.3)',
        'glow-gold': '0 0 24px oklch(0.75 0.12 75 / 0.3)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'chevron-bounce': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.7' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
        'scan-line': {
          '0%': { top: '0%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
        'pulse-border': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'progress-fill': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'chevron-bounce': 'chevron-bounce 2s ease-in-out infinite',
        'scan-line': 'scan-line 2.5s ease-in-out infinite',
        'pulse-border': 'pulse-border 2s ease-in-out infinite',
        'progress-fill': 'progress-fill 2s ease-out forwards',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
}
