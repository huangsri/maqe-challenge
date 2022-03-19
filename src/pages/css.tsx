import Head from 'next/head'
import Link from 'next/link'
import type { NextPage } from 'next'
import { Fragment } from 'react'

import { CSSStyling } from '../components'

const CSS: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>CSS Styling | MAQE Challenges</title>
      </Head>

      <div style={{ marginTop: '40px' }}>
        <CSSStyling />
      </div>

      <Link href="/">
        <a>Back Home</a>
      </Link>

      <style jsx>{`
        a {
          color: #67c3e9;
          position: fixed;
          left: 12px;
          top: 12px;
          font-size: 12px;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </Fragment>
  )
}

export default CSS
