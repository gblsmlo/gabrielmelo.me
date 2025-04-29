import { type Content, isFilled } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import type { SliceComponentProps } from '@prismicio/react'
import clsx from 'clsx'
import type { FC } from 'react'

import { Bounded } from '@/components/Bounded'

type ImageProps = SliceComponentProps<Content.ImageSlice>

const Image: FC<ImageProps> = ({ slice, index }) => {
	const image = slice.primary.image

	return (
		<Bounded
			as="section"
			className={clsx('bg-white', index === 0 && 'pt-0 md:pt-0')}
		>
			{isFilled.image(image) && (
				<div className="bg-gray-100">
					<PrismicNextImage field={image} sizes="100vw" className="w-full" />
				</div>
			)}
		</Bounded>
	)
}

export default Image
