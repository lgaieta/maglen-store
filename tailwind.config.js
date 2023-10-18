const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                text: colors.zinc[300],
                'text-dark': colors.zinc[100],
                border: colors.zinc[700],
                background: colors.zinc[900],
                'background-dark': colors.zinc[900],
            },
            spacing: {
                'limit-content': '56.25rem',
            },
        },
    },
    plugins: [],
};
