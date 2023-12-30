import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-dark": "#ECBB2A",
        "red-dark": "#9F0B0A",
        "black-medium": "#1E1D1D",
      },
    },
  },
  plugins: [],
}
export default config
