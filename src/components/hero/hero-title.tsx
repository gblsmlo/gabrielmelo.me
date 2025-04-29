'use client'

import { motion } from 'motion/react'

export function HeroTitle({ children }: React.ComponentProps<'h1'>) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ ease: 'easeIn', duration: 1.6, delay: 0.4 }}
		>
			<h1 className="font-black text-4xl text-foreground leading-none lg:text-6xl">
				{children}
			</h1>
		</motion.div>
	)
}
