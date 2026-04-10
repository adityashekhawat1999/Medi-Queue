/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container-low": "#f2f3ff",
        "on-tertiary-fixed": "#002204",
        "on-secondary": "#ffffff",
        "outline": "#6f7883",
        "surface-container-highest": "#dfe2f1",
        "surface-dim": "#d7d9e8",
        "surface-container-lowest": "#ffffff",
        "surface-tint": "#00629f",
        "surface-variant": "#dfe2f1",
        "secondary-container": "#56d9fd",
        "tertiary-container": "#43a648",
        "tertiary-fixed-dim": "#78dc77",
        "primary": "#00629f",
        "primary-container": "#0098f2",
        "on-error-container": "#93000a",
        "on-error": "#ffffff",
        "on-surface": "#171b26",
        "inverse-primary": "#9acbff",
        "tertiary-fixed": "#94f990",
        "error-container": "#ffdad6",
        "on-tertiary-container": "#003408",
        "on-primary-fixed-variant": "#004a79",
        "on-primary": "#ffffff",
        "on-secondary-fixed": "#001f27",
        "secondary-fixed": "#b3ebff",
        "inverse-surface": "#2c303b",
        "on-primary-container": "#002d4d",
        "inverse-on-surface": "#edf0ff",
        "on-tertiary": "#ffffff",
        "on-secondary-fixed-variant": "#004e5f",
        "surface": "#faf8ff",
        "on-tertiary-fixed-variant": "#005313",
        "on-primary-fixed": "#001d34",
        "on-secondary-container": "#005c70",
        "primary-fixed-dim": "#9acbff",
        "outline-variant": "#bfc7d4",
        "secondary-fixed-dim": "#53d6fa",
        "surface-container-high": "#e5e7f6",
        "primary-fixed": "#d0e4ff",
        "surface-bright": "#faf8ff",
        "on-background": "#171b26",
        "error": "#ba1a1a",
        "secondary": "#00677d",
        "tertiary": "#006e1c",
        "background": "#faf8ff",
        "surface-container": "#ebedfc",
        "on-surface-variant": "#3f4752"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Open Runde", "Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"],
        "accent": ["Caveat", "cursive"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
