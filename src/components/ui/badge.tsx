export function Badge({ children }: React.ComponentProps<'div'>) {
	return (
		<div className="flex h-9 items-center justify-center rounded-full border border-neutral-600 bg-neutral-700 px-4 font-semibold text-base text-neutral-200 uppercase">
			{children}
		</div>
	)
}
