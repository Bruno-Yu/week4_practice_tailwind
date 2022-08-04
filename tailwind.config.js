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
          light: '#00000029',
          mild: '#DEE2E6',
          strong: '#DCDCDC',
          dark: '#707070'
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