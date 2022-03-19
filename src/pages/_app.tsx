import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Fragment } from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>MAQE - Challenges</title>
        <meta name="description" content="For MAQE Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChakraProvider resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </Fragment>
  )
}

export default MyApp
