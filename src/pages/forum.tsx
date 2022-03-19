import { NextPage } from 'next'
import { Fragment } from 'react'

import { PostList } from '@/features/forum/containers'

const ForumPage: NextPage = () => {
  return (
    <Fragment>
      <div style={{ background: '#f7f7f7' }}>
        <div className="container">
          <h1>MAQE Forum</h1>
          <p>Your current timezone is: Asia/Bangkok</p>

          <div className="wrapper">
            <PostList />
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .container {
            width: 1000px;
            margin: 0 auto;
            padding: 40px 0 40px;
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
        `}
      </style>
    </Fragment>
  )
}

export default ForumPage
