import {
	RiArrowRightUpLongLine,
	RiGithubLine,
	RiLinkedinFill,
} from '@remixicon/react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Icon } from './ui/icon'
export function NavAction() {
	return (
		<div className="flex items-center gap-4">
			<div className="hidden items-center gap-2 lg:flex">
				<Link href="https://github.com/gblsmlo" target="_blank">
					<Icon>
						<RiGithubLine widths={24} />
					</Icon>
				</Link>
				<Link href="https://www.linkedin.com/in/gabsmelo/" target="_blank">
					<Icon>
						<RiLinkedinFill widths={24} />
					</Icon>
				</Link>
			</div>

			{/* <Link href="/">
				<Button variant="link" size="sm">
					Book a Call
					<RiArrowRightUpLongLine widths={24} />
				</Button>
			</Link> */}
		</div>
	)
}
