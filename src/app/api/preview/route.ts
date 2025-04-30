import { redirectToPreviewURL } from '@prismicio/next'
import type { NextRequest } from 'next/server'

import { prismic } from '@lib/prismicio'

export async function GET(request: NextRequest) {
	const client = prismic

	return await redirectToPreviewURL({ client, request })
}
