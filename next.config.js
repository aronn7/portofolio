/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            { source: '/projects/modern-ecommerce-platform', destination: '/projects/aronn-tic-tac-toe', permanent: true },
            { source: '/projects/modern-game-platform', destination: '/projects/aronn-tic-tac-toe', permanent: true },
            { source: '/projects/task-flow-management', destination: '/projects/aronn-sudoku', permanent: true },
            { source: '/projects/modern-game', destination: '/projects/aronn-sudoku', permanent: true },
            { source: '/projects/ai-content-generator', destination: '/projects/aronnblocks', permanent: true },
        ];
    },
    images: {
        domains: ['images.unsplash.com', 'raw.githubusercontent.com'],
        unoptimized: true,
    },
};

module.exports = nextConfig;
