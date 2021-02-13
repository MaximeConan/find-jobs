import React from 'react'
import Link from 'next/link'

import { IJob, ICity } from '../interfaces/jobs.interface'
import Badge from './Badge'

type Props = {
	data: IJob
}

const Card = ({ data }: Props) => (
	<Link href="/jobs/[id]" as={`/jobs/${data.id}`}>
		<a>
			<div className="border-2 border-gray-100 p-4 rounded-md">
				<div className="mb-3">
					<h3>{data.title}</h3>
					{data.cities.length > 1 && (
						<p>Localisation : {data.cities.map((city: ICity) => city.name).join(', ')}</p>
					)}
				</div>
				<Badge tags={data.tags} />
			</div>
		</a>
	</Link>
)

export default Card
