import { Container } from '../ui/container'
import { HeroDescription } from './hero-description'
import { HeroImage } from './hero-image'
import { HeroIntro } from './hero-intro'
import { HeroTitle } from './hero-title'

export function Hero() {
	return (
		<section
			className="flex h-screen max-h-[800px] items-center justify-center bg-fixed bg-repeat"
			style={{ backgroundImage: "url('/images/hero-pattern.png')" }}
		>
			<Container className="flex items-center justify-between gap-6">
				<div className="flex flex-1/2 flex-col gap-10">
					<HeroIntro>Hi, I’m a Gabriel Melo</HeroIntro>

					<div className="space-y-8">
						<HeroTitle>
							A Frontend who transforms ideas into seamless digital experiences
						</HeroTitle>
						<HeroDescription>
							I bring 12 years of experience across{' '}
							<b className="text-accent">design</b>,{' '}
							<b className="text-accent">development</b>, and{' '}
							<b className="text-accent">management</b> to craft seamless
							digital experiences.
						</HeroDescription>
					</div>
				</div>

				<div className="hidden flex-1/2 items-center justify-center lg:flex">
					<HeroImage />
				</div>
			</Container>
		</section>
	)
}
