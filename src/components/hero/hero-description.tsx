'use client'

import { motion } from 'motion/react'

export function HeroDescription({
	children,
	...props
}: React.ComponentProps<'p'>) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ ease: 'easeIn', duration: 1.6, delay: 0.4 }}
		>
			<p className="text-2xl" {...props}>
				{children}
			</p>
		</motion.div>
	)
}
