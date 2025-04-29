export function Icon({ children, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			className="flex h-6 w-6 items-center justify-center text-foreground transition-colors duration-150 ease-linear hover:text-foreground/80"
			{...props}
		>
			{children}
		</div>
	)
}
