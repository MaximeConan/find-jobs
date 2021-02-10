import React from 'react'
import Link from 'next/link'

import { Job } from '../interfaces/jobs.interface'
import Badge from './Badge'

type Props = {
	data: Job
}

const ListItem = ({ data }: Props) => (
	<div className="border-2 border-gray-100 p-4 rounded-md">
		<Link href="/jobs/[id]" as={`/jobs/${data.id}`}>
			<a>
				{data.id}: {data.title}
			</a>
		</Link>
		<Badge tags={data.tags} />
	</div>
)

export default ListItem
