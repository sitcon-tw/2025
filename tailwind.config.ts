import type { Config } from "tailwindcss";
import Typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      screens: {
        desktop: "1920px",
        tablet: "1024px",
        mobile: "375px",
        venue_desktop: "1350px",
      },
      fontSize: {
        h1: "48px",
        h2: "32px",
        h3: "24px",
        normal: "16px",
        "h1-mobile": "30px",
        "h2-mobile": "24px",
        "h3-mobile": "20px",
        "normal-mobile": "16px",
      },
      colors: {
        blue: "#52599F",
        "light-brown": "#D3C4B7",
        white: "#DDD8CB",
        black: "#000000",
        red: "#B84C3F",
        orange: "#CC9232",
        gray: "#D9D9D9",
        "light-blue": "#007AFF",
        // new theme below
        background: "#151B2E",
        "background-light": "#27304D",
        primary: "#97BDFF",
        secondary: "#ABC6FF",
        foreground: "#C9E6FF",
        accent: "#BDB3FF",
        "accent-light": "#d4cdff",
      },
      aspectRatio: {
        "1/2": "1 / 2",
      },
    },
  },
  plugins: [Typography],
};
export default config;
