import * as React from 'react'
import ReactMarkdown from 'react-markdown'

import { City, Job } from '../interfaces/jobs.interface'

type Props = {
	item: Job
}

const ListDetail = ({ item: job }: Props) => (
	<div>
		<h1>Detail for {job.title}</h1>
		<p>Job ID : {job.id}</p>
		<ReactMarkdown source={job.description} />
		<p>
			<strong>Cities</strong>
		</p>
		<ul>
			{job.cities.map((city: City, index: number) => (
				<li key={index}>{city.name}</li>
			))}
		</ul>
	</div>
)

export default ListDetail
