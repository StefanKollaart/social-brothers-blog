/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "social-brothers-orange": "#EA5E31",
        "darker-white": "#FAFAFA",
        "darker-grey": "#7D7D7D",
        "lighter-grey": "#868686",
        "lighter-black": "#262626",
      },
      fontSize: {
        xxxs: "0.5rem",
        xxs: "0.625rem",
      },
      maxWidth: {
        layout: "69.75rem",
        header: "90rem",
      },
      spacing: {
        header: "13rem",
      },
      backgroundImage: {
        header: "url('/header-bg.png')",
      },
      textUnderlineOffset: {
        "active-link": "0.5rem",
      },
      boxShadow: {
        "preview-item": "0 0 10px 0 rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
