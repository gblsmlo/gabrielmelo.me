'use client'

import { motion } from 'motion/react'

export function HeroIntro({ children }: React.ComponentProps<'div'>) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ ease: 'easeIn', duration: 1.4 }}
		>
			<b className="font-bold text-lg lg:text-2xl">{children}</b>
		</motion.div>
	)
}
