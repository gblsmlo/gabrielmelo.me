import { RiMenu2Line } from '@remixicon/react'
import { Logo } from './logo'
import { NavAction } from './nav-actions'
import { NavBrand } from './nav-brand'
import { NavLink } from './nav-link'
import { NavMenu } from './nav-menu'
import { Button } from './ui/button'
import { Container } from './ui/container'

export function Header() {
	return (
		<header className="relative z-10 flex h-20 items-center border-b border-b-foreground/10 bg-background lg:h-24">
			<Container className="flex grow items-center justify-between">
				<div className="flex items-center gap-2">
					<div className="block lg:hidden">
						<Button size="icon" variant="ghost">
							<RiMenu2Line size={24} widths={24} className="size-5" />
						</Button>
					</div>
					<NavBrand>
						<Logo />
					</NavBrand>
				</div>
				<NavMenu className="hidden lg:flex">
					<NavLink href="/">Home</NavLink>
					<NavLink href="/experiences">Experiences</NavLink>
					<NavLink href="/portfolio">Portfolio</NavLink>
					<NavLink href="/blog">Blog</NavLink>
					<NavLink href="/about">About</NavLink>
					<NavLink href="/contact">Contact</NavLink>
				</NavMenu>
				<NavAction />
			</Container>
		</header>
	)
}
