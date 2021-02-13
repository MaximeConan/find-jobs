import * as React from 'react'

import Card from './Card'
import { IJob } from '../interfaces/jobs.interface'

type Props = {
	items: IJob[]
}

const List = ({ items }: Props) => (
	<ul>
		{items.map((item) => (
			<li key={item.id}>
				<Card data={item} />
			</li>
		))}
	</ul>
)

export default List
