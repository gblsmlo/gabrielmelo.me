import {
	type ClientConfig,
	type Route,
	createClient as baseCreateClient,
} from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'
import sm from '../../slicemachine.config.json'

export const repositoryName = sm.repositoryName

const routes: Route[] = [
	{ type: 'home', path: '/' },
	{ type: 'experiences', path: '/experiences' },
	{ type: 'portfolio', path: '/portfolio' },
	{ type: 'works', path: '/portfolio/works/:uid' },
	{ type: 'blog_post', path: '/blog/:uid' },
	{ type: 'about', path: '/about' },
]

export function createClient(config: ClientConfig = {}) {
	const client = baseCreateClient(repositoryName, {
		routes,
		fetchOptions:
			process.env.NODE_ENV === 'production'
				? { next: { tags: ['prismic'] }, cache: 'force-cache' }
				: { next: { revalidate: 5 } },
		...config,
	})

	enableAutoPreviews({ client })

	return client
}
