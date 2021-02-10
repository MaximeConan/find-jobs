import { gql } from '@apollo/client'

export const GET_JOBS = gql`
	query {
		jobs {
			title
			description
			id
			cities {
				id
				name
			}
		}
	}
`
