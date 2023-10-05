import type { Config } from "tailwindcss"

const color = require("tailwindcss/colors")

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: color.black,
        "primary-dark": color.white,
      },
      backgroundColor: {
        primary: "#fdfdfd",
        "primary-dark": color.black,
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
}
export default config
