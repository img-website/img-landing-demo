/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./index.html", "./index-2.html", "./index-3.html", "./main.html"],
  content: ["./**/*.{html,js}"],
  theme: {
 
    extend: {
      screens: {
        '3xl': '1920px',
      },
      colors: {
        'theme1': '#FE0000',
        'theme2': '#1878bc',
        'theme3': '#0a66c2',
        'theme4': '#365899',
        // 'theme5': '#1978BC',
      },
      animation: {
        'appearBottom': 'appearB  linear',
        'move1': 'move 5s linear infinite',
        'fixed-nav': 'fixedNav 0.6s',
        'rotate-word': 'rotateWord 18s linear infinite',
        'move': 'move1 18s linear infinite',
        'videoplay': 'videoplay linear',
      },
      keyframes: {
        move: {
          '0%': { 'offset-distance': '0%' },
          '100%': { 'offset-distance': '100%' },
        },
        appearB: {
          'from': {
            opacity: '0',
            transform: 'translateY(100%)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fixedNav: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-60px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)'
          },
        },
        rotateWord: {
          ' 0%': { opacity: '0' },

          '2% ': {
            opacity: '0',
            transform: 'translateY(-30px)'
          },

          '5%': {
            opacity: '1',
            transform: 'translateY(0px)'
          },

          '17%': {
            opacity: '1',
            transform: 'translateY(0px)'
          },

          '20%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },

          '80%': { opacity: '0' },

          '100%': { opacity: '0' }
        },
        videoplay: {
          'from': {
            opacity: '0',
            scale: '.5'
          },
          'to': {
            opacity: '1',
            scale: '1'
          }
        }
      }
    },
  },
  plugins: [],
}
