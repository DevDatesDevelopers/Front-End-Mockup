const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    fontFamily:{
      roboto: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        "primary": "#000",
        "white": "#fff",
        "secondary-purple": "#8507B2",
        "content": "#A0A0A0",
        "primary-white": "#E9DADA",
        "primary-black": "#1E1E1E",
        "primary-purple": "#B20CEC",
        "primary-border": "#DF8CFC;"
      },
      screens: {
        'portrait': '480px',
        'landscape': '768px',
        'tablet': '992px',
        'pc': '1120px'
      },
    }
  },
  plugins: [
    plugin(
      function({ addBase, theme }) {
        function extractColorVars(colorObj, colorGroup = '') {
          return Object.keys(colorObj).reduce((vars, colorKey) => {
            const value = colorObj[colorKey];
  
            const newVars =
              typeof value === 'string'
                ? { [`-${colorGroup}-${colorKey}`]: value }
                : extractColorVars(value, `-${colorKey}`);
  
            return { ...vars, ...newVars };
          }, {});
        }

        addBase({
          ':root': extractColorVars(theme('colors')),
          'body': { backgroundColor: theme('colors.primary'), color: theme('colors.primary-purple'), overflowX: 'hidden', fontFamily: theme('fontFamily.roboto') },
          'h1': {
            fontSize: 'clamp(29px, 4.5vw, 60px)',
            lineHeight: '1.1em',
            marginBottom: '0.2rem',
            fontWeight: '300',
            letterSpacing: '0em',
          },
          'h2': {
              fontSize: 'clamp(24px, 3.4vw, 45px)',
              lineHeight: '1.1em',
              marginBottom: '0.2rem', 
              fontWeight: '300',
              letterSpacing: '0em',
          },
          'h3': {
              fontSize: 'clamp(22px, 2.3vw, 30px)',
              lineHeight: '1.1em',
              marginBottom: '0.2rem', 
              fontWeight: '300',
              letterSpacing: '0em',
          },
          'h4': {
              fontSize: 'clamp(20px, 1.8vw, 24px)',
              lineHeight: '1.1em', 
              marginBottom: '0.2rem', 
              fontWeight: '300',
              letterSpacing: '0em',
          },
          'h5': {
              fontSize: 'clamp(18px, 1.7vw, 22px)',
              lineHeight: '1.1em',
              marginBottom: '0.2rem', 
              fontWeight: '300',
              letterSpacing: '0em',
          },
          'h6': {
              fontSize: 'clamp(16px, 1.7vw, 20px)',
              lineHeight: '1.1em',
              marginBottom: '0.2rem', 
              fontWeight: '300',
              letterSpacing: '0em',
          },
          'p': {
              fontSize: 'clamp(16px, 1.2vw, 16px)',
              lineHeight: '1.375em',
              fontWeight: '300',
              letterSpacing: '0em'
          },
          'ul, ol': {
            fontWeight: '300'
          },
          '*': {
            margin: '0',
            padding: '0'
          }
        })
      })
  ],
}