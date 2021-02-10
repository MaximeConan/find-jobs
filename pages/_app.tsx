import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'

import useNavigationLoading from '../hooks/useNavigationLoading'
import Spiner from '../components/Spiner'

export const client = new ApolloClient({
	uri: 'https://api.graphql.jobs/',
	cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }: AppProps) {
	const isLoading = useNavigationLoading()

	return <ApolloProvider client={client}>{isLoading ? <Spiner /> : <Component {...pageProps} />}</ApolloProvider>
}

export default MyApp
