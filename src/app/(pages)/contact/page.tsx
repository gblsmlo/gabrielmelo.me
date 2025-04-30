import { prismic } from '@lib/prismicio'
import { notFound } from 'next/navigation'
import {
	PageHeader,
	PageHeaderIntro,
	PageHeaderTitle,
} from '../_components/page-header'

export default async function ContactPage() {
	const contact = await prismic.getSingle('contact').catch(() => notFound())

	return (
		<>
			<PageHeader>
				{contact.data.intro && (
					<PageHeaderIntro>{contact.data.intro}</PageHeaderIntro>
				)}

				<PageHeaderTitle>{contact.data.title}</PageHeaderTitle>
			</PageHeader>
		</>
	)
}
