import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'

import { CSSStyling } from '../components'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>MAQE - Challenges</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <CSSStyling />
      </div>
    </Fragment>
  )
}

export default Home