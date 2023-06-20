/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                text: '#2E2E2E',
                'text-dark': '#101010',
                border: '#EAEAEA',
                background: '#FFFFFF',
                'background-dark': '#F8F8F8',
            },
            spacing: {
                'section-sides': '10rem',
            },
        },
    },
    plugins: [],
};
