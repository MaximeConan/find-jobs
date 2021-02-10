interface Props {
	fallback?: string
}

const Spiner = ({ fallback = 'Loading ...' }: Props) => <div>{fallback}</div>

export default Spiner
