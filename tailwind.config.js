/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#e60000', // 50%
        secondary: '#ff8080',// 75%
        tertiary: '#ffcccc', // 90%
        // primary: '#0000ff', // 50%
        // secondary: '#8080ff',// 75%
        // tertiary: '#ccccff', // 90%
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-red-600',
    'bg-red-500',
    'bg-red-400',
    'bg-red-300',
    'bg-red-200',
    'bg-red-100',
    'text-red-600',
    'text-red-500',
    'text-red-400',
    'text-red-300',
    'text-red-200',
    'text-red-100',
    'border-red-600',
    'border-red-500',
    'border-red-400',
    'border-red-300',
    'border-red-200',
    'border-red-100',
    'focus:border-red-600',
    'focus:border-red-500',
    'focus:border-red-400',
    'focus:border-red-300',
    'focus:border-red-200',
    'focus:border-red-100',
    'shadow-red-600',
    'shadow-red-500',
    'shadow-red-400',
    'shadow-red-300',
    'shadow-red-200',
    'shadow-red-100',
  ],
}