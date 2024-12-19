/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ['Fira sans condensed', 'Inter', 'Arial', 'sans-serif'], // Default sans-serif font
            serif: ['Merriweather', 'serif'], // Default serif font
        },
        extend: {
            screens: {
                xs: '480px', // Extra small devices
                sm: '640px', // Small devices
                md: '768px', // Medium devices
                lg: '1024px', // Large devices
                xl: '1280px', // Extra large devices
                '2xl': '1536px', // Double extra large devices
                '3xl': '1920px', // Custom screen size for 4K monitors
            },
            colors: {
                accent: '#E26E1E', // Default primary color
                accent2: '#F4B223',
                accent3: '#1D1C30',
                accent4: '#2980B9',
                primary: '#FEFFFE', // Secondary color
                neutral: '#080115', // Neutral text
                light: '#F9F7F5',
                gray: '#4c8077',
            },
            backgroundImage: {
                'royal': 'linear-gradient(to right, #141E30, #243B55)', // Custom gradient
                'blue-white': 'linear-gradient(to right, #2980B9, #6DD5FA, #FFFFFF)',     // Example 2
                'orange-teal': 'linear-gradient(to bottom, #ff9a9e, #fad0c4, #fbc2eb)',
            },
            fontSize: {
                '8xl': '5.625rem',
                '7xl': '4rem',
                '5xl': '2.85rem',
                '4xl': '2rem',
                '2xl': '1.375rem',
                'base': '1rem',
                '4.2xl': '2.175rem',
            },
            spacing: {
                18: '4.5rem', // Custom spacing value
                72: '18rem',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                ".scrollbar-hide": {
                    "-ms-overflow-style": "none", /* For IE and Edge */
                    "scrollbar-width": "none", /* For Firefox */
                },
                ".scrollbar-hide::-webkit-scrollbar": {
                    display: "none", /* For Chrome, Safari, and Edge */
                },
            });
        },
    ],
}