import { gql } from '@apollo/client'

export const GET_JOBS = gql`
	query {
		jobs {
			id
			title
			description
			tags {
				id
				name
				slug
			}
			cities {
				id
				name
			}
		}
	}
`
