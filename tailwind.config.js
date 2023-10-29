/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'red': '#ED7B7B',
      'dark blue': '#313866',
      'dark purple': '#504099',
      'gray': '#838383',
      'white': '#FFFFFF',
      'fade purple': '#836096',
      'orage': '#F0B86E',
      'yellow': '#EBE76C',
      'BG': '#F7D9D9',
      'vivid purple': '#974EC3',
      'black': '#000000',
      'fade gray': '#F3F3F3',
    }
  },
  plugins: [],
}

