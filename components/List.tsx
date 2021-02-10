import * as React from 'react'

import ListItem from './ListItem'
import { Job } from '../interfaces/jobs.interface'

type Props = {
	items: Job[]
}

const List = ({ items }: Props) => (
	<ul>
		{items.map((item) => (
			<li key={item.id}>
				<ListItem data={item} />
			</li>
		))}
	</ul>
)

export default List
