/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#07050d',
        surface: {
          50: '#0d0a1a',
          100: '#140f26',
          200: '#1b1433',
          300: '#251b47',
          400: '#352763',
        },
        vice: {
          pink: '#ff007a',
          fuchsia: '#ff2a85',
          orange: '#ff7700',
          amber: '#ff9e00',
          gold: '#ffb703',
          cyan: '#00f0ff',
          aqua: '#00f5d4',
          purple: '#9d4edd',
          night: '#07050d',
        },
        miami: {
          pink: '#ff007a',
          orange: '#ff7700',
          cyan: '#00f0ff',
          purple: '#9d4edd',
          yellow: '#ffb703',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        display: [
          'Impact',
          'Haettenschweiler',
          '"Arial Black"',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      letterSpacing: {
        widest: '0.2em',
        mega: '0.35em',
      },
      boxShadow: {
        'neon-pink': '0 0 30px -5px rgba(255, 0, 122, 0.55), 0 0 10px rgba(255, 0, 122, 0.3)',
        'neon-cyan': '0 0 30px -5px rgba(0, 240, 255, 0.55), 0 0 10px rgba(0, 240, 255, 0.3)',
        'neon-orange': '0 0 30px -5px rgba(255, 119, 0, 0.55), 0 0 10px rgba(255, 119, 0, 0.3)',
        'hud-glow': '0 0 15px -2px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
      },
      backgroundImage: {
        'vice-sunset': 'linear-gradient(135deg, #ff007a 0%, #ff7700 50%, #00f0ff 100%)',
        'vice-dusk': 'linear-gradient(180deg, rgba(255, 0, 122, 0.15) 0%, rgba(13, 10, 26, 0.95) 75%)',
        'vice-card': 'linear-gradient(135deg, rgba(21, 16, 38, 0.8) 0%, rgba(14, 10, 26, 0.9) 100%)',
      },
    },
  },
  plugins: [],
};
