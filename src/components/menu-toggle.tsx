'use client'

import { RiCloseLargeLine } from '@remixicon/react'
import { useState } from 'react'
import { Logo } from './logo'
import { NavLink } from './nav-link'
import { Button } from './ui/button'

interface ToogleMenuProps {
	toggleMenu: () => void
}
export function ToogleMenu({ toggleMenu }: ToogleMenuProps) {
	const [isOpen, setIsOpen] = useState(true)

	function handleToggle() {
		setIsOpen(!isOpen)
	}

	return (
		<div
			className="-left-full fixed top-0 z-20 flex h-full w-full max-w-md flex-col gap-10 bg-background p-20 shadow data-[is-open=true]:left-0"
			data-is-open={isOpen}
		>
			<Button size={'icon'} onClick={handleToggle}>
				<RiCloseLargeLine />
			</Button>
			<div>
				<Logo />
			</div>
			<div className="flex flex-col gap-10">
				<NavLink href="/">Home</NavLink>
				<NavLink href="/experiences">Experiences</NavLink>
				<NavLink href="/portfolio">Portfolio</NavLink>
			</div>
		</div>
	)
}
