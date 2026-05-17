import tailwindAnimate from 'tailwindcss-animate';
import containerQuery from '@tailwindcss/container-queries';
import intersect from 'tailwindcss-intersect';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
        './index.html',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: '#14B8A6',
                    foreground: '#FFFFFF',
                    dark: '#0D9488',
                },
                secondary: {
                    DEFAULT: '#10B981',
                    foreground: '#FFFFFF',
                    dark: '#059669',
                },
                accent: {
                    DEFAULT: '#8B5CF6',
                    foreground: '#FFFFFF',
                },
                warning: {
                    DEFAULT: '#F59E0B',
                    foreground: '#FFFFFF',
                },
                risk: {
                    low: '#22C55E',
                    moderate: '#F59E0B',
                    high: '#F97316',
                    critical: '#EF4444',
                },
                nourish: {
                    navy: '#0A1628',
                    card: '#0F1D32',
                    hover: '#1A2744',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                sidebar: {
                    DEFAULT: '#0F1D32',
                    background: '#0F1D32',
                    foreground: '#E5E7EB',
                    primary: '#14B8A6',
                    'primary-foreground': '#FFFFFF',
                    accent: '#1A2744',
                    'accent-foreground': '#FFFFFF',
                    border: 'rgba(255,255,255,0.06)',
                    ring: '#14B8A6'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            backgroundImage: {
                'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 50%, transparent 100%)',
                'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
            },
            animation: {
                'shimmer': 'shimmer 2s linear infinite',
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
            },
            keyframes: {
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                    '50%': { opacity: 0.7, transform: 'scale(1.05)' },
                },
                'fade-in-up': {
                    '0%': { opacity: 0, transform: 'translateY(10px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
            }
        }
    },
    plugins: [
        tailwindAnimate,
        containerQuery,
        intersect,
    ],
};
