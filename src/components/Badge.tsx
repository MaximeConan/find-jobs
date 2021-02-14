import { ITag } from '../interfaces/jobs.interface'

type Props = {
	tags: ITag[]
}

const Badge = ({ tags }: Props) => {
	return (
		<div className="max-w-full flex flex-wrap">
			{tags.map((tag: ITag, index: number) => (
				<span data-testid="__badge__" className="primary-bg mr-2 p-2 mb-2 rounded-md" key={index}>
					{tag.name}
				</span>
			))}
		</div>
	)
}

export default Badge
