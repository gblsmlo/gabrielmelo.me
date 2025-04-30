import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		// remotePatterns: [new URL('https://images.prismic.io/gblsmlo/**')],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'https://images.prismic.io',
				pathname: '/gblsmlo/**',
			},
		],
	},
}

export default nextConfig
