/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: ["class", 'html[class~="dark"]'],
  content: [
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{md,mdx,tsx}",
    "./theme.config.tsx",
  ],
  theme: {
    fontFamily: {
      header: ["'Red Hat Display'", "sans-serif"],
      body: ["'Red Hat Text'", "sans-serif"],
      mono: ["'Red Hat Mono'", "monospace"],
    },
    extend: {
      fontSize: {
        xs: ["12px", "1"],
        sm: ["13px", "1"],
        base: ["14px", "22px"],
        base16: ["16px", "24px"],
        base18: ["18px", "1"],
        lg: ["24px", "30px"],
        xl: ["59px", "1.1"],
      },
      colors: {
        dark: "#110F23",
        light: "#E6DAFE",
        darkBlue: "#181629",
      },
    },
  },
  plugins: [],
};
