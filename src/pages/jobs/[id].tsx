import { GetStaticProps, GetStaticPaths } from 'next'

import Layout from '../../components/Layout'
import Job from '../../components/Job'
import { IJob } from '../../interfaces/jobs.interface'
import { GET_JOBS } from '../../queries/jobsQueries'
import { client } from '../../client'

type Props = {
	item?: IJob
	errors?: string
}

const StaticPropsDetail = ({ item, errors }: Props) => {
	if (errors) {
		return (
			<Layout title="Error | Next.js + TypeScript Example">
				<p>
					<span style={{ color: 'red' }}>Error:</span> {errors}
				</p>
			</Layout>
		)
	}

	return (
		<Layout title={`${item ? item.title : 'Job Detail'} | Next.js + TypeScript Example`}>
			{item && <Job item={item} />}
		</Layout>
	)
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
	// Get the paths we want to pre-render based on users

	const { data } = await client.query({ query: GET_JOBS })
	const jobs: IJob[] = data?.jobs
	const paths = jobs.map((job) => ({
		params: { id: job.id },
	}))

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const id = params?.id

		const { data } = await client.query({ query: GET_JOBS })
		const jobs: IJob[] = data?.jobs
		const job = jobs.find((data) => data.id === id)

		// By returning { props: item: job }, the StaticPropsDetail component
		// will receive `item` as a prop at build time
		return { props: { item: job } }
	} catch (err) {
		return { props: { errors: err.message } }
	}
}
