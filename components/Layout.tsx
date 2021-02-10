import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Footer from './Footer'

type Props = {
	children?: ReactNode
	title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
	<div className="container">
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<header className="my-4 p-4 primary-bg rounded-md">
			<nav>
				<Link href="/">
					<a>Home</a>
				</Link>{' '}
				|{' '}
				<Link href="/about">
					<a>About</a>
				</Link>{' '}
				|{' '}
				<Link href="/jobs">
					<a>Jobs List</a>
				</Link>
			</nav>
		</header>
		{children}
		<Footer />
	</div>
)

export default Layout
