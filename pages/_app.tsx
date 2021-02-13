import 'tailwindcss/tailwind.css'
import '../styles/global.css'

import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'

import { client } from '../client'

import useNavigationLoading from '../hooks/useNavigationLoading'
import Spiner from '../components/Spiner'

function MyApp({ Component, pageProps }: AppProps) {
	const isLoading = useNavigationLoading()

	return <ApolloProvider client={client}>{isLoading ? <Spiner /> : <Component {...pageProps} />}</ApolloProvider>
}

export default MyApp
