/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '6rem',
      },
    },
    colors: {
      transparent: "transparent",
      inherit: "inherit",
      white: "#ffffff",
      black: "#231F20",
      primary: "#F82727",
      secondary: "#4D4D4D",
      background: "#F8F8F8",
      gray: {
        25: "#FCFCFD",
        50: "#F9FAFB",
        100: "#F2F4F7",
        200: "#EAECF0",
        300: "#D0D5DD",
        400: "#98A2B3",
        500: "#667085",
        600: "#475467",
        700: "#344054",
        800: "#1D2939",
        900: "#101828",
      },
    },
    extend: {
      animation: {
        "spin-2s": "spin 2s linear infinite",
        "spin-3s": "spin 3s linear infinite",
        "spin-4s": "spin 4s linear infinite",
        "spin-5s": "spin 5s linear infinite",
        "spin-6s": "spin 6s linear infinite",
        "spin-7s": "spin 7s linear infinite",
        "spin-8s": "spin 8s linear infinite",
        "spin-9s": "spin 9s linear infinite",
        "spin-10s": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
}

