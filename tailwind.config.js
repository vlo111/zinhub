/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: { min: '0px', max: '640px' },
      // => @media (min-width: 350px and max-width: 639px) { ... }

      sm: { min: '640px', max: '768px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: '768px', max: '1024px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: '1024px', max: '1280px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: '1280px', max: '1535px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { min: '1535px' },
      // => @media (min-width: 1536px) { ... }    },
    },
    colors: {
      white: '#ffffff',
      gray: '#9E9E9E',
      error: '#F03738',
      'secondary-orange': {
        light: '#FF882F88',
        DEFAULT: '#FF882F',
        dark: '#FF882F',
      },
      'primary-blue': {
        light: '#1F82FF88',
        DEFAULT: '#1F82FF',
        dark: '#1F82FF',
      },
      'light-gray': '#444444',
      'davy-gray': '#545B5B',
      'dark-gray': '#333333',
      'light-blue': '#1f82ff0a',
    },
    fontSize: {
      xss: ['12px', { lineHeight: 'normal', letterSpacing: '0' }],
      xs: ['14px', { lineHeight: 'normal', letterSpacing: '0' }],
      sm: ['16px', { lineHeight: 'normal', letterSpacing: '0' }],
      lg: ['18px', { lineHeight: 'normal', letterSpacing: '0' }],
      xsl: ['22px', { lineHeight: 'normal', letterSpacing: '0' }],
      xl: ['30px', { lineHeight: 'normal', letterSpacing: '0' }],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
