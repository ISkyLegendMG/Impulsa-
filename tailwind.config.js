/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background, #ffffff)",
        foreground: "var(--foreground, #111827)",

        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",

        primary: "var(--primary, #2563eb)",
        "primary-foreground": "var(--primary-foreground)",
        "primary-hover": "var(--primary-hover)",

        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",

        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",

        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",

        success: "var(--success)",
        "success-foreground": "var(--success-foreground)",

        warning: "var(--warning)",
        "warning-foreground": "var(--warning-foreground)",

        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",

        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
      },

      borderRadius: {
        xl: "var(--radius-xl)",
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
    },
  },
  plugins: [],
};