/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // or 'selector' for v3.4+, 'class' is safer for now
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'retro-white': 'var(--retro-white)',
                'retro-black': 'var(--retro-black)',
                'retro-rust': 'var(--retro-rust)',
                'retro-beige': 'var(--retro-beige)',
                'retro-green': 'var(--retro-green)',
            },
            fontFamily: {
                sans: ['var(--font-instrument-serif)'],
                mono: ['var(--font-space-mono)'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
