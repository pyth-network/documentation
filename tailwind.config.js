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
        lightForeground: "#0C0B1A",
        darkBackground: "#121212",
        darkLinks: "#BB86FC",
        lightLinks: "#6200EE",
        dark: "#110F23",
        light: "#E6DAFE",
        darkBlue: "#181629",
        darkGray: "#252236",
        darkGray1: "#242235",
        darkGray2: "#312F47",
        darkGray3: "#2F2C4F",
        darkGray4: "#413E53",
        darkGray5: "#5F5E6D",
      },
    },
  },
  plugins: [],
};
