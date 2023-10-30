const colors = require('tailwindcss/colors');
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    plugins: [
        nextui({
            themes: {
                dark: {
                    colors: {
                        primary: {
                            DEFAULT: colors.pink[500],
                            foreground: colors.white,
                        },
                        background: colors.zinc[950],
                    },
                },
                light: {
                    colors: {
                        primary: {
                            DEFAULT: colors.pink[500],
                            foreground: colors.white,
                        },
                    },
                },
            },
        }),
    ],
    theme: {
        extend: {
            //     colors: {
            //         text: colors.zinc[900],
            //         'text-secondary': colors.zinc[700],
            //         'text-highlight': colors.zinc[950],
            //         border: colors.zinc[200],
            //         background: colors.zinc[50],
            //         'background-light': colors.white,
            //         'background-dark': colors.zinc[100],
            //         // Dark mode
            //         // text: colors.zinc[100],
            //         // 'text-secondary': colors.zinc[300],
            //         // 'text-highlight': '#FFFFFF',
            //         // border: colors.zinc[700],
            //         // background: colors.zinc[900],
            //         // 'background-light': colors.zinc[800],
            //         // 'background-dark': colors.zinc[950],
            //     //     },
            maxWidth: {
                section: '56rem',
            },
        },
    },
};
