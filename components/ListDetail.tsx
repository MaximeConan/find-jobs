import * as React from 'react'

import { Job } from '../interfaces/jobs.interface'

type Props = {
	item: Job
}

const ListDetail = ({ item: job }: Props) => (
	<div>
		<h1>Detail for {job.title}</h1>
		<p>{job.description}</p>
		<p>ID: {job.id}</p>
	</div>
)

export default ListDetail
