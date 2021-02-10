import React from 'react'
import Link from 'next/link'

import { Job } from '../interfaces/jobs.interface'

type Props = {
	data: Job
}

const ListItem = ({ data }: Props) => (
	<Link href="/jobs/[id]" as={`/jobs/${data.id}`}>
		<a>
			{data.id}: {data.title}
		</a>
	</Link>
)

export default ListItem
