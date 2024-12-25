/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            SourceSansPro: ['Source-Sans-pro', 'sans-serif'],
            Lato: [ "Lato", 'serif'],
            sansSerif: ['apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", "Liberation Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"], // Default sans-serif font
            monospace: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'], // Default serif font
        },
        extend: {
            screens: {
                xs: '480px', // Extra small devices
                sm: '576px', // Small devices
                md: '768px', // Medium devices
                lg: '992px', // Large devices
                xl: '1200px', // Extra large devices
                '2xl': '1366px', // Double extra large devices
                '3xl': '1533px',
            },
            colors: {
                blue: '#007bff', // Default primary color
                indigo: '#6610f2',
                purple: '#6f42c1',
                red: '#dc3545',
                orange: '#fd7e14',
                green: '#28a745',
                teal: '#20c997',
                cyan: '#17a2b8',
                white: '#fff',
                gray: '#6c757d',
                secondary: '#A8CF45',
                yellow: '#ffc107',
                success: '#28a745',
                info: '#17a2b8',
                warning: '#ffc107',
                danger: '#dc3545',

                light: '#f8f9fa',
                lightBg: '#E1E1E1',
                dark: '#343a40',
                neutral: '#191F23',
                neutral2: '#222b32',
                bodyBg: '#192857',
                primary: '#0071BC',
                footerBg: '#3d4550',
                navLink: '#18639F',
                grayDark: '#343a40',
                accentGold: '#B0862C',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        function ({
            addUtilities
        }) {
            addUtilities({
                ".scrollbar-hide": {
                    "-ms-overflow-style": "none",
                    /* For IE and Edge */
                    "scrollbar-width": "none",
                    /* For Firefox */
                },
                ".scrollbar-hide::-webkit-scrollbar": {
                    display: "none",
                    /* For Chrome, Safari, and Edge */
                },
            });
        },
    ],
}