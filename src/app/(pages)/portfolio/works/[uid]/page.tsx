export default async function PortfolioSingle({
	params,
}: { params: Promise<{ uid: string }> }) {
	const { uid } = await params
	return <div>Portfolio {uid}</div>
}
