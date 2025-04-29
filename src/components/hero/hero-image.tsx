'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export function HeroImage() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ ease: 'easeIn', duration: 1.6, delay: 1 }}
		>
			<Image
				src="/images/hero-image.png"
				className="max-w-[662px]"
				width={662}
				height={618}
				alt="Man avatar photography inside shaptes animations"
			/>
		</motion.div>
	)
}
