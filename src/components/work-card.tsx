import { PrismicNextImage } from '@prismicio/next'
import Image from 'next/image'
import Link from 'next/link'

interface ThumbnailProps {
	url: string
	alt: string | null
	dimensions: {
		height: number
		width: number
	}
}

interface WorkCardProps {
	uid: string | null
	data: {
		title: string
		description: string
		thumbnail: ThumbnailProps
	}
}

export function WorkCard({ data, uid }: WorkCardProps) {
	const { title, thumbnail, description } = data

	return (
		<Link href={`/portfolio/works/${uid}`} prefetch>
			<div>{title}</div>

			{/* <Image src={thumbnail.url} alt="" width={464} height={348} /> */}

			{description ?? <div>{description}</div>}
		</Link>
	)
}
