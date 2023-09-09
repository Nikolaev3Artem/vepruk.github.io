/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      'xl':{'max':'1200px'},
      'lg':{'max':'1024px'},
      'md':{'max':'768px'},
      'sm':{'max':'480px'}
    },
    container:{
      padding:'47px',
      center:true
    },
    extend: {
      colors:{
        'black':'#01111A',
        'white':'#FBFBFB'
      }
    },
  },
  plugins: [],
}