import '@styles/global.css'

import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'

const SourceSans = Source_Sans_3({
	display: 'swap',
	subsets: ['latin'],
	weight: ['400', '600', '800', '900'],
})

export const metadata: Metadata = {
	title: 'Gabriel Melo',
	description:
		'A Frontend who transforms ideas into seamless digital experiences',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR" data-theme="dark">
			<body className={`${SourceSans.className} antialiased`}>{children}</body>
		</html>
	)
}
