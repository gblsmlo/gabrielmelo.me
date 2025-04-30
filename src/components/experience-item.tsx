import Image from 'next/image'
import { Badge } from './ui/badge'

interface ExperienceItemProps {
	logoUrl: string
	title: string
	resume: string
}

export function ExperienceItem({ title, resume }: ExperienceItemProps) {
	return (
		<div className="group overflow-hidden border-b border-b-neutral-200 p-6 py-10 transition-all duration-300 ease-in-out last:border-b-0 hover:bg-neutral-200 lg:p-10 dark:border-b-neutral-800 hover:dark:bg-neutral-800">
			<div className="flex gap-6 ">
				<div className="relative hidden max-w-24 flex-1/5 lg:block">
					<Image
						fill
						className="object-contain"
						src="/images/logo.png"
						alt=""
					/>
				</div>

				<div className="w-full max-w-[360] flex-3/5 lg:flex-1/5">
					<h3 className="font-semibold text-foreground text-lg leading-tight lg:text-2xl">
						{title}
					</h3>
					<p>Febuary 2022, Presente</p>
				</div>

				<div className="hidden max-w-[580] flex-2/5 lg:block">
					<div className="font-medium text-foreground text-lg leading-tight">
						{resume}
					</div>
				</div>

				<div className="flex flex-1/5 justify-end">
					<Badge>UI/UX</Badge>
				</div>
			</div>

			<div className="mt-6 h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:h-fit">
				<div className="flex flex-col gap-2">
					<h4 className="font-semibold text-foreground text-lg">Works</h4>

					<div className="flex gap-3">
						<div className="h-[120px] w-40 rounded-md bg-neutral-600">a</div>
						<div className="h-[120px] w-40 rounded-md bg-neutral-600">a</div>
						<div className="h-[120px] w-40 rounded-md bg-neutral-600">a</div>
					</div>
				</div>
			</div>
		</div>
	)
}
