/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'theme1': '#FE0000',
        'theme2': '#1878bc',
        'theme3': '#0a66c2',
        'theme4': '#365899',
        // 'theme5': '#1978BC',
      },
      animation: {
        'fixed-nav': 'fixedNav 0.6s',
        'rotate-word': 'rotateWord 18s linear infinite'
      },
      keyframes: {
       
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
         ' 0%': {opacity: '0'},
          
          '2% ':{
            opacity: '0',
            transform: 'translateY(-30px)'
          },
          
          '5%': {
            opacity: '1',
            transform: 'translateY(0px)'
          },
          
          '17%':{
            opacity: '1',
            transform: 'translateY(0px)'
          },
          
          '20%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          
          '80%': {opacity: '0'},
          
          '100%': {opacity: '0'}
        }
      }
    },
  },
  plugins: [],
}