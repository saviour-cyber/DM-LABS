import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dmblue: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#2563EB",
          600: "#0062FF", // Logo primary blue
          700: "#004ECC",
          800: "#003A99",
          900: "#002666",
          950: "#001333",
        },
        dmred: {
          50: "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#F43F5E",
          600: "#E60012", // Logo secondary red
          700: "#BE000F",
          800: "#99000C",
          900: "#75000A",
          950: "#4D0006",
        },
        dmdark: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#0B0F19", // Logo black/dark lettering
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'subtle-blue': '0 4px 20px -2px rgba(0, 98, 255, 0.12)',
        'subtle-red': '0 4px 20px -2px rgba(230, 0, 18, 0.12)',
        'premium': '0 10px 30px -5px rgba(11, 15, 25, 0.08), 0 4px 12px -2px rgba(11, 15, 25, 0.04)',
        'premium-hover': '0 20px 40px -10px rgba(0, 98, 255, 0.16), 0 8px 16px -4px rgba(11, 15, 25, 0.06)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'tech-pattern': 'radial-gradient(circle at 1px 1px, rgba(0, 98, 255, 0.08) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};

export default config;
