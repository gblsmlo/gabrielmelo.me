import { notFound } from 'next/navigation'
import { prismic } from 'prismicio'
import {
	PageHeader,
	PageHeaderIntro,
	PageHeaderTitle,
} from '../_components/page-header'

export default async function AboutPage() {
	const about = await prismic.getSingle('about').catch(() => notFound())

	return (
		<>
			<PageHeader>
				{about.data.intro && (
					<PageHeaderIntro>{about.data.intro}</PageHeaderIntro>
				)}

				<PageHeaderTitle>{about.data.title}</PageHeaderTitle>
			</PageHeader>
		</>
	)
}
