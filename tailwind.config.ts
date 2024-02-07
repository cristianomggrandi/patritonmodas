import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: "#02182B",
                "primary-fade": "#02182B30",
                secondary: "#FFE347",
                tertiary: "#84DCC6",
                contrast: "#C3CBD5",
                cement: "#757E78",
                beige: "#f5f5dc",
                success: "#19EA4A",
                warning: "#f0d500",
                error: "#f32013",
            },
            boxShadow: {
                dropdown: "0 20px 80px -20px rgba(0, 0, 0, 0.3)",
            },
        },
    },
    plugins: [],
}
export default config
