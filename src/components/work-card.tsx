import Link from 'next/link'
import type { WorksDocument } from '../../prismicio-types'

export function WorkCard({ data, uid }: WorksDocument) {
	return (
		<Link href={`/portfolio/works/${uid}`} prefetch className="rounded-md p-4">
			<div>{data.title}</div>
			<div>{data.description}</div>

			{/* <Image src={thumbnail.url} alt="" width={464} height={348} /> */}
		</Link>
	)
}
