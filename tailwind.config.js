module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
          screens: {
        'pad': '768px',
        'mac':'992px',
    },
    container: {
      padding: '13px',
      center: 'true',
    },
    extend: {

      colors: {
        'primary': {
          light: '#FBF2F2',
          DEFAULT: '#AA0601',
          dark: '#650300',
        },
        'info': {
          white: '#FFFFFF',
          black: '#000000',
          lighter:'#F2F2F2',
          light: '#00000029',
          border: '#00000020',
          mild: '#DEE2E6',
          milder:'#555555',
          strong: '#DCDCDC',
          dark: '#707070'
        },
        'warning': {
          light: '#B75929',
          dark:'#5F3E2D',
        }
      },
      maxWidth: {
        'mac': '1296px',
        'pad': '696px',
        'phone':'576px',
      },
      minWidth: {
        'mac': '1296px',
        'pad': '696px'
      },
      spacing: {
        '3.25':'13px'
      },
      boxShadow: {
        'review':' 0px 2px 6px #00000029'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}