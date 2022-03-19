import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import Link from 'next/link'

import { CSSStyling } from '../components'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>CSS Styling | MAQE Challenges</title>
      </Head>

      <div>
        <div style={{ textAlign: 'center' }}>
          <Link href="/forum">
            <a>Forum Page</a>
          </Link>
        </div>

        <div style={{ marginTop: '40px' }}>
          <CSSStyling />
        </div>
      </div>
    </Fragment>
  )
}

export default Home
