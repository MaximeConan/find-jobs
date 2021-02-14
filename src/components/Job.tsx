import * as React from 'react'
import ReactMarkdown from 'react-markdown'

import Company from './Company'

import { ICity, IJob } from '../interfaces/jobs.interface'

type Props = {
	item: IJob
}

const ListDetail = ({ item: job }: Props) => (
	<div>
		<h1>{job.title}</h1>
		<Company data={job.company} />
		<ReactMarkdown source={job.description} />
		<p>
			<strong>Cities</strong>
		</p>
		<ul>
			{job.cities.map((city: ICity, index: number) => (
				<li key={index}>{city.name}</li>
			))}
		</ul>
	</div>
)

export default ListDetail
