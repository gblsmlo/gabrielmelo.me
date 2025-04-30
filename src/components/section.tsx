import { cn } from '@utils/cn'
import { Container } from './ui/container'

function Section({
	children,
	className,
	...props
}: React.ComponentProps<'section'>) {
	return (
		<section
			className={cn(`relative bg-background py-10 lg:py-20 ${className}`)}
			{...props}
		>
			<Container>{children}</Container>
		</section>
	)
}

function SectionHeader({ children }: React.ComponentProps<'header'>) {
	return (
		<header className="flex flex-col items-center justify-center gap-2 text-center lg:gap-4">
			{children}
		</header>
	)
}

function SectionLead({
	children,
	className,
	...props
}: React.ComponentProps<'span'>) {
	return (
		<span
			className={cn(
				`${className} font-semibold text-foreground text-lg uppercase leading-none`,
			)}
			{...props}
		>
			{children}
		</span>
	)
}

function SectionTitle({
	children,
	className,
	...props
}: React.ComponentProps<'h2'>) {
	return (
		<h2
			className={cn(
				`${className} font-black text-2xl text-foreground leading-none lg:text-5xl`,
			)}
			{...props}
		>
			{children}
		</h2>
	)
}

function SectionContent({ children }: React.ComponentProps<'main'>) {
	return <main className="py-4 lg:py-10">{children}</main>
}

export { Section, SectionHeader, SectionContent, SectionTitle, SectionLead }
