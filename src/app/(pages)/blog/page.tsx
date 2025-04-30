import { notFound } from 'next/navigation'
import { prismic } from 'prismicio'
import {
	PageHeader,
	PageHeaderIntro,
	PageHeaderTitle,
} from '../_components/page-header'

export default async function BlogPage() {
	const blog = await prismic.getSingle('blog').catch(() => notFound())

	return (
		<>
			<PageHeader>
				{blog.data.intro && (
					<PageHeaderIntro>{blog.data.intro}</PageHeaderIntro>
				)}

				<PageHeaderTitle>{blog.data.title}</PageHeaderTitle>
			</PageHeader>
		</>
	)
}
