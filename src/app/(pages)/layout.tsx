import { Footer } from '@components/footer'
import { Header } from '@components/header'
import { Container } from '@components/ui/container'

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header />
			<section>
				<Container>{children}</Container>
			</section>
			<Footer />
		</>
	)
}
