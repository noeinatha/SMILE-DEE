/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      red: "#ED7B7B",
      darkblue: "#313866",
      darkpurple: "#504099",
      gray: "#838383",
      white: "#FFFFFF",
      fadepurple: "#836096",
      orage: "#F0B86E",
      yellow: "#EBE76C",
      BG: "#F7D9D9",
      pageBG: "#F5EAEA",
      vividpurple: "#974EC3",
      black: "#000000",
      fadegray: "#F3F3F3",
      fadebg: "#F5EAEA",
    },
  },
  plugins: [],
};
