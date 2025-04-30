import { ExperienceItem } from '@components/experience-item'

import { ExperienceTable } from '@components/experiences-table'
import { prismic } from '@lib/prismicio'
import { notFound } from 'next/navigation'
import {
	PageHeader,
	PageHeaderIntro,
	PageHeaderTitle,
} from '../_components/page-header'

export default async function ExperiencesPage() {
	const experience = await prismic
		.getSingle('experience')
		.catch(() => notFound())

	return (
		<div>
			<PageHeader>
				{experience.data.intro && (
					<PageHeaderIntro>{experience.data.intro}</PageHeaderIntro>
				)}

				<PageHeaderTitle>{experience.data.title}</PageHeaderTitle>
			</PageHeader>

			<ExperienceTable limit={8} />
		</div>
	)
}
