'use client'

import { cn } from '@utils/cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type React from 'react'

interface NavLinkProps extends React.ComponentProps<'a'> {
	href: string
}

export function NavLink({ href, children, className, ...props }: NavLinkProps) {
	const pathname = usePathname()
	const isActive = pathname === href

	return (
		<Link
			href={`${href}`}
			className={cn(
				`font-semibold text-foreground text-lg leading-none hover:text-foreground/80 data-[is-active='true']:text-accent ${className}`,
			)}
			prefetch
			data-is-active={isActive}
			{...props}
		>
			{children}
		</Link>
	)
}
