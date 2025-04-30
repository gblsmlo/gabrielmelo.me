import { ExperienceTable } from '@components/experiences-table'
import { ExperienceItem } from '../experience-item'
import {
	Section,
	SectionContent,
	SectionHeader,
	SectionLead,
	SectionTitle,
} from '../section'

export function ExperienciesSection() {
	return (
		<Section>
			<SectionHeader>
				<SectionLead>Experiences</SectionLead>
				<SectionTitle>Explore My Journey</SectionTitle>
			</SectionHeader>

			<SectionContent>
				<ExperienceTable limit={4} />
			</SectionContent>
		</Section>
	)
}
