module.exports = {
  content: [
    './src/**/*.{html,njk,js}',
    './src/index.html',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
      screens: {
        'xs': '440px',
        '3xl': '1700px'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h2: {
              color: 'var(--dark-copy)'
            },
            p: {
              color: 'var(--dark-copy)'
            }
          },
        },
      }),
      backgroundImage: {
        'hero-pattern': "linear-gradient(180deg,rgba(0,0,0,1) 0%,rgba(0,0,0,0.2) 100%), url('./_includes/static/img/pexels-tirachard-kumtanom-112571-347152.webp')",
     },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
