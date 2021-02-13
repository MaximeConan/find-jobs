import Link from 'next/link'

type Page = {
	href: string
	label: string
	target: string
}

const Header = () => {
	const pages = [
		{ href: '/', label: 'Home', target: '_self' },
		{ href: 'https://github.com/MaximeConan/find-jobs', label: 'Github', target: '_blank' },
		{ href: 'https://www.linkedin.com/in/maximeconan/', label: 'Linkedin', target: '_blank' },
	]

	return (
		<header className="my-4 p-4 primary-bg rounded-md">
			<nav>
				{pages.map((page: Page) => (
					<Link key={page.label} href={page.href}>
						<a target={page.target} className="pr-3">
							{page.label}
						</a>
					</Link>
				))}
			</nav>
		</header>
	)
}

export default Header
