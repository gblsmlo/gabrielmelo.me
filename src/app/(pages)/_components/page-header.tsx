function PageHeader({ children }: React.ComponentProps<'header'>) {
	return (
		<header className="space-y-2 py-10 text-center lg:gap-4 lg:space-y-4 lg:py-20">
			{children}
		</header>
	)
}

function PageHeaderTitle({ children }: React.ComponentProps<'h1'>) {
	return (
		<h1 className="font-black text-2xl text-foreground leading-none lg:text-5xl">
			{children}
		</h1>
	)
}

function PageHeaderIntro({ children }: React.ComponentProps<'h2'>) {
	return (
		<h2 className="font-semibold text-foreground uppercase leading-none lg:text-lg">
			{children}
		</h2>
	)
}

export { PageHeader, PageHeaderTitle, PageHeaderIntro }
