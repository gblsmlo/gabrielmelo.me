import { prismic } from 'prismicio'
import {
	PageHeader,
	PageHeaderIntro,
	PageHeaderTitle,
} from '../_components/page-header'

export default async function PortfolioPage() {
	const portfolio = await prismic.getSingle('portfolio')

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
