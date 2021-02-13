import { GetStaticProps } from 'next'
import { client } from '../client'

import Layout from '../components/Layout'
import List from '../components/List'

import { IJob } from '../interfaces/jobs.interface'
import { GET_JOBS } from '../queries/jobsQueries'

type Props = {
	jobs: IJob[]
}

const IndexPage = ({ jobs }: Props) => (
	<Layout title="Users List | Next.js + TypeScript Example">
		<h1>Jobs List</h1>
		<List items={jobs} />
	</Layout>
)

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await client.query({ query: GET_JOBS })
	const jobs: IJob[] = data?.jobs

	return { props: { jobs } }
}

export default IndexPage
