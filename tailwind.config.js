module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],

  theme: {
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
    screens: {
      md: { max: '876px' },
      sd: { max: '640px' },
      smm: { max: '480px' },
    },
    extend: {
      animation: {
        wiggle: 'wiggle 1s infinite linear  alternate',
      },
      keyframes: {
        wiggle: {
          '0%, 40%': { transform: 'translateY(2px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      colors: {
        brain: {
          500: '#8257E6',
        },
        bgTheme: {
          900: '#0D0D0D',
          800: '#18181B',
          700: '#18181B',
          600: '#27272A',
          500: '#555555',
          400: '#999999',
        },
      },
    },
  },
  plugins: [],
};
