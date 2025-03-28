module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {
        colors: {
          indigo: {
            600: '#4f46e5',
            700: '#4338ca',
          },
        },
        aspectRatio: {
            '1': '1',
            'ar': '1 / 1',
          },
      },
    },
    variants: {
        extend: {
          opacity: ['disabled'],
          backgroundColor: ['disabled'],
        },
      },
    plugins: [],
  }