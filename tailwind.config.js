/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            container: {
                width: 1200,
                center: true,
            },
        },
    },
    plugins: [],
};
