import { prismic } from '@lib/prismicio'
import { notFound } from 'next/navigation'
import {
	PageHeader,
	PageHeaderIntro,
	PageHeaderTitle,
} from '../_components/page-header'

export default async function PortfolioPage() {
	const portfolio = await prismic.getSingle('portfolio').catch(() => notFound())

	return (
		<>
			<PageHeader>
				{portfolio.data.intro && (
					<PageHeaderIntro>{portfolio.data.intro}</PageHeaderIntro>
				)}

				<PageHeaderTitle>{portfolio.data.title}</PageHeaderTitle>
			</PageHeader>
		</>
	)
}
