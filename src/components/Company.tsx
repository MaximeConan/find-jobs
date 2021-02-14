import { ICompany } from '../interfaces/jobs.interface'

type Props = {
	data: ICompany
}

const Company = ({ data }: Props) => {
	return (
		<div className="bg-gray-50 p-5 rounded-md mb-5">
			{data.logoUrl !== null && <img className="w-10 h-10" src={data.logoUrl} alt={`${data.name} logo`} />}
			<p>{data.name}</p>
			<p>
				Website:{' '}
				<a className="text-blue-400 duration-300 hover:opacity-50" href={data.websiteUrl} target="_blank">
					{data.websiteUrl}
				</a>
			</p>
		</div>
	)
}

export default Company
