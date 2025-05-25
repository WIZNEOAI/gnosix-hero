import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        jakarta: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider: "0.05em",
        widest: "0.1em",
      },
      lineHeight: {
        comfortable: "1.5",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Gnosix brand colors - updated
        gnosix: {
          black: "#000000",
          dark: "#0C0C0C",
          card: "#1A1A1A",
          gold: "#F0B430",
          lightgold: "#F6C667",
          purple: "#8F50EC",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-gold-purple": "linear-gradient(to right, #F0B430, #8F50EC)",
        "gradient-sunset": "linear-gradient(to right, #8F50EC, #F0B430)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0, 0, 0, 0.25)",
        "card-hover": "0 8px 30px rgba(0, 0, 0, 0.3), 0 0 10px rgba(240, 180, 48, 0.2) inset",
        button: "0 4px 10px rgba(0, 0, 0, 0.2)",
        "button-hover": "0 6px 15px rgba(0, 0, 0, 0.25), 0 0 5px rgba(240, 180, 48, 0.3) inset",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config