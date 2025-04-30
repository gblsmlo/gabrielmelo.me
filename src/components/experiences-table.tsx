import { prismic } from '@lib/prismicio'
import { ExperienceItem } from './experience-item'

interface ExperienceTableProps {
	limit: number
}

export async function ExperienceTable({ limit }: ExperienceTableProps) {
	const experiences = await prismic.getAllByType('experiences', {
		limit: limit ?? 10,
	})

	return experiences.map((experience) => (
		<ExperienceItem key={experience.id} data={experience.data} />
	))
}
