/** @type {import('next').NextConfig} */


const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '*',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '**',
            },
        ],
    },
}

module.exports = nextConfig