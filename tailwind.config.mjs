/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        surface: {
          50: '#14141f',
          100: '#1c1c2b',
          200: '#252538',
          300: '#32324b',
        },
        miami: {
          pink: '#ff2a85',
          orange: '#ff7b00',
          cyan: '#00f0ff',
          purple: '#8b5cf6',
          yellow: '#facc15',
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
      boxShadow: {
        'neon-pink': '0 0 25px -5px rgba(255, 42, 133, 0.45)',
        'neon-cyan': '0 0 25px -5px rgba(0, 240, 255, 0.45)',
        'neon-orange': '0 0 25px -5px rgba(255, 123, 0, 0.45)',
      },
      backgroundImage: {
        'vice-gradient': 'linear-gradient(135deg, #ff2a85 0%, #ff7b00 50%, #00f0ff 100%)',
        'sunset-gradient': 'linear-gradient(to right, #ff2a85, #ff7b00)',
        'cyber-gradient': 'linear-gradient(to right, #00f0ff, #8b5cf6)',
      },
    },
  },
  plugins: [],
};
