import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import { NextPage } from 'next'

import { PostList } from '@/features/forum/containers'

const ForumPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Template and Styling | MAQE Challenges</title>
      </Head>

      <div style={{ background: '#f7f7f7' }}>
        <div className="container">
          <h1>MAQE Forum</h1>
          <p>Your current timezone is: Asia/Bangkok</p>

          <div className="wrapper">
            <PostList />
          </div>
        </div>
      </div>

      <Link href="/">
        <a className="back-home">Back Home</a>
      </Link>

      <style jsx>
        {`
          .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 60px 20px 40px;
          }

          .wrapper {
            margin-top: 16px;
          }

          h1 {
            font-size: 32px;
            font-weight: 600;
          }

          h1 + p {
            margin-top: 16px;
          }

          a.back-home {
            color: #67c3e9;
            position: fixed;
            left: 12px;
            top: 12px;
            font-size: 12px;
          }

          a.back-home:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </Fragment>
  )
}

export default ForumPage
