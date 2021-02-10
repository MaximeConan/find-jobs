import { GetStaticProps } from 'next'
import Link from 'next/link'
import { client } from '../_app'

import Layout from '../../components/Layout'
import List from '../../components/List'

import { Job } from '../../interfaces/jobs.interface'
import { GET_JOBS } from '../../queries/jobsQueries'

type Props = {
	jobs: Job[]
}

const JobsPage = ({ jobs }: Props) => (
	<Layout title="Users List | Next.js + TypeScript Example">
		<h1>Jobs List</h1>
		<List items={jobs} />
		<p>
			<Link href="/">
				<a>Go home</a>
			</Link>
		</p>
	</Layout>
)

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await client.query({ query: GET_JOBS })
	const jobs: Job[] = data?.jobs

	return { props: { jobs } }
}

export default JobsPage
