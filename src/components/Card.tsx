import React from 'react'
import Link from 'next/link'
import { isEmpty, isNil } from 'lodash'

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
					<h3 data-testid="__card-title__">{data.title}</h3>
					{!isNil(data.cities) && !isEmpty(data.cities) && (
						<div data-testid="__card-cities__">
							<p>Localisation : {data.cities.map((city: ICity) => city.name).join(', ')}</p>
						</div>
					)}
				</div>
				<Badge tags={data.tags} />
			</div>
		</a>
	</Link>
)

export default Card
