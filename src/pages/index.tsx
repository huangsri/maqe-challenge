import type { NextPage } from 'next'
import { Fragment } from 'react'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Fragment>
      <div className="container">
        <h1>Front-End Engineer</h1>

        <Link href="/css">
          <a>1. CSS Styling</a>
        </Link>
        <Link href="/forum">
          <a>2. Template and Styling</a>
        </Link>
      </div>

      <style jsx>
        {`
          h1 {
            font-weight: bold;
            font-size: 32px;
          }

          a {
            color: #67c3e9;
          }

          a:hover {
            text-decoration: underline;
          }

          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 40px;
            gap: 20px;
          }
        `}
      </style>
    </Fragment>
  )
}

export default Home
