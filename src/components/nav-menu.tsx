import { cn } from '@utils/cn'

export function NavMenu({
	children,
	className,
	...props
}: React.ComponentProps<'nav'>) {
	return (
		<nav
			className={cn(
				`flex items-center justify-center gap-4 lg:gap-6 ${className}`,
			)}
			{...props}
		>
			{children}
		</nav>
	)
}
