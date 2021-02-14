import { render } from '@testing-library/react'
import { IJob } from '../../interfaces/jobs.interface'

import Card from '../Card'

const data: IJob = {
	id: '1',
	title: 'Foo',
	tags: [{ id: '1', name: 'foo', slug: 'foo' }],
	description: 'Foo bar zog',
	cities: [
		{ id: '1', name: 'Paris' },
		{ id: '2', name: 'Madrid' },
	],
	company: { id: '1', name: 'Company', websiteUrl: 'foo', logoUrl: 'http://foo.com' },
}

const getInstance = (props?: any) => <Card data={data} {...props} />

describe('Card', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(getInstance())
		expect(asFragment).toMatchSnapshot()
	})

	it('renders root link with correct url', () => {
		const { getByTestId } = render(getInstance())
		const title = getByTestId('__card-title__')

		expect(title).toBeInTheDocument()
		expect(title).toHaveTextContent('Foo')
	})

	it('renders cities correclty', () => {
		const { getByTestId } = render(getInstance())
		const cities = getByTestId('__card-cities__')

		expect(cities).toBeInTheDocument()
		expect(cities).toHaveTextContent('Paris, Madrid')
	})

	it('doest not renders city if there is no one', () => {
		const { queryByTestId } = render(getInstance({ data: { ...data, cities: [] } }))
		const cities = queryByTestId('__card-cities__')

		expect(cities).toBeNull()
	})
})
