import type { Config } from "tailwindcss";
import {addDynamicIconSelectors} from "@iconify/tailwind";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        baseColor: "#E4E6F2",
        mainColor: "#839CEA",
        secColor: "#B498FB",
        darkColor: "#3F3E5B",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
};
export default config;
