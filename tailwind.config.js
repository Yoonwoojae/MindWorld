/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: {
                    50: '#fefcf9',
                    100: '#fdf8f0',
                    200: '#faf0e0',
                    300: '#f5e5cb',
                    400: '#efd6b1',
                    500: '#e8c497',
                },
                sage: {
                    400: '#64d9c8',
                    500: '#4ecdc4',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delay': 'float 6s ease-in-out infinite 3s',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(10deg)' },
                }
            }
        },
    },
    plugins: [],
}
