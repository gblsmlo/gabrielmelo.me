import Link from 'next/link'

export function Logo() {
	return (
		<Link
			href="/"
			className="font-black text-2xl text-foreground leading-none transition-colors duration-150 ease-linear hover:text-foreground/80 lg:text-2xl"
		>
			gblsmlo
		</Link>
	)
}
