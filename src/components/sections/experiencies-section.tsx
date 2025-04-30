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
				<div className="">
					<ExperienceItem
						logoUrl="./"
						key={1}
						title="Creative Minds, New York"
						resume="Lorem Ipsum is simply dummy text of the printing"
					/>
					<ExperienceItem
						logoUrl="./"
						key={2}
						title="Creative Minds, New York"
						resume="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
					/>
					<ExperienceItem
						logoUrl="./"
						key={3}
						title="Creative Minds, New York"
						resume="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					/>
				</div>
			</SectionContent>
		</Section>
	)
}
