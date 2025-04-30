import { ExperienceItem } from '@components/experience-item'

import { notFound } from 'next/navigation'
import { prismic } from 'prismicio'
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
		</div>
	)
}
