import { render } from '@testing-library/react'
import { ITag } from '../../interfaces/jobs.interface'

import Badge from '../Badge'

const tags: ITag[] = [
	{
		id: '1',
		name: 'foo foo',
		slug: 'foo-foo',
	},
	{
		id: '2',
		name: 'bar bar',
		slug: 'bar-bar',
	},
]

const getInstance = (props?: any) => <Badge tags={tags} {...props} />

describe('Badge', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(getInstance())
		expect(asFragment).toMatchSnapshot()
	})

	it('renders a list of tags with a given name', () => {
		const { getAllByTestId } = render(getInstance())
		const badges = getAllByTestId('__badge__')

		badges.forEach((badge: HTMLElement, index: number) => expect(badge).toHaveTextContent(tags[index].name))
	})
})
