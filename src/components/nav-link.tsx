'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type React from 'react'

interface NavLinkProps extends React.ComponentProps<'a'> {
	href: string
}

export function NavLink({ href, children, ...props }: NavLinkProps) {
	const pathname = usePathname()
	const isActive = pathname === href

	return (
		<Link
			href={`${href}`}
			className="font-semibold text-foreground text-lg leading-none hover:text-foreground/80 data-[is-active='true']:text-accent"
			prefetch
			data-is-active={isActive}
			{...props}
		>
			{children}
		</Link>
	)
}
