/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#030814',
        panel: '#08172B',
        electric: '#1677FF',
        azure: '#258BFF',
        neon: '#00BFFF',
        cyan: '#00E5FF',
        steel: '#8BA9C9',
        line: '#164B83',
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
