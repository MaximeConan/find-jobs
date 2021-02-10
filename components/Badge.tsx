import { Tag } from '../interfaces/jobs.interface'

type Props = {
	tags: Tag[]
}

const Badge = ({ tags }: Props) => {
	return (
		<div>
			{tags.map((tag: Tag, index) => (
				<span className="secondary-bg mr-2 p-2 rounded-md" key={index}>
					{tag.name}
				</span>
			))}
		</div>
	)
}

export default Badge
