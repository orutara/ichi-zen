/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        'twitter': '#0089FF',
        'nightSky': '#001E54'
      },
      spacing: {
        '9/10': '90%'
      },
      width: {
        'roundedButton': '280px'
      },
      height: {
        '94/100': '94vh',
        '95/100': '95vh'
      },
      maxWidth: {
        'roundedButton': '280px'
      },
      minHeight: {
        'minHeight': '630px',
        'minHeight__lg': '780px'
      },
      maxHeight: {
        '80vh': '80vh',
        '90vh': '90vh',
      },
      backgroundImage: {
        'nightSky' : "url('/src/assets/images/bg/bg_nightsky.jpg')"
      },
      borderRadius: {
        '4xl': '32px'
      },
      inset: {
        '1/7': '14.4%',
        '1/5': '20%',
        '45/100': '45%'
      },
    },
  },
  plugins: [],
}
