import { Footer } from '@components/footer'
import { Header } from '@components/header'
import { Hero } from '@components/hero/hero'
import {
	Section,
	SectionContent,
	SectionHeader,
	SectionLead,
	SectionTitle,
} from '@components/section'
import { ExperienciesSection } from '@components/sections/experiencies-section'
import { prismic } from '@lib/prismicio'
import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link'

export default async function HomePage() {
	const works = await prismic.getAllByType('works', {
		limit: 4,
	})

	return (
		<>
			<Header />
			<Hero />
			<ExperienciesSection />
			<Section>
				<SectionHeader>
					<SectionLead>Portfolio</SectionLead>
					<SectionTitle>Selected works to You</SectionTitle>
				</SectionHeader>

				<SectionContent>
					<div className="grid gap-6 lg:grid-cols-4">
						{works.map((work) => (
							<Link
								href={work.data.link.text ?? '#'}
								className="group rounded-md p-4 hover:drop-shadow-2xl dark:border-neutral-700 dark:bg-neutral-800"
								key={work.id}
								target="_blank"
							>
								<div className="relative aspect-[4/3] overflow-hidden rounded-md">
									<PrismicNextImage
										field={work.data.thumbnail}
										className="h-full w-full scale-105 object-cover transition-transform duration-400 ease-linear hover:scale-100"
										width={464}
										height={348}
										alt=""
									/>
								</div>

								<div className="mt-4">
									<h4 className="font-bold text-foreground text-xl">
										{work.data.title}
									</h4>
									<p className="font-medium text-base text-foreground">
										{work.data.description}
									</p>
								</div>

								<div className="mt-6">
									<div className="flex gap-2">
										<span className="font-medium text-sm">Published</span>
										<span className="font-medium text-sm">
											{work.data.published_at}
										</span>
									</div>
								</div>
							</Link>
						))}
					</div>
				</SectionContent>
			</Section>
			<Footer />
		</>
	)
}
