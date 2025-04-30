import { prismic } from '@lib/prismicio'
import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
	PageHeader,
	PageHeaderIntro,
	PageHeaderTitle,
} from '../_components/page-header'

export default async function PortfolioPage() {
	const portfolio = await prismic.getSingle('portfolio').catch(() => notFound())
	const works = await prismic.getAllByType('works')

	return (
		<>
			<PageHeader>
				{portfolio.data.intro && (
					<PageHeaderIntro>{portfolio.data.intro}</PageHeaderIntro>
				)}

				<PageHeaderTitle>{portfolio.data.title}</PageHeaderTitle>
			</PageHeader>

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
		</>
	)
}
