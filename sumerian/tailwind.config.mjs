export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: '#090b10', 900: '#0d1118', 850: '#111722', 800: '#151c28', 700: '#202b3a'
        },
        accent: { blue: '#7db7ff', cyan: '#68e2d6' }
      },
      boxShadow: { glow: '0 0 50px rgba(104,226,214,.08)' }
    },
  },
  plugins: [],
};
