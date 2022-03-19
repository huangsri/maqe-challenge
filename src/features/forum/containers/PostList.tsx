import { Fragment } from 'react'

import { PostItem } from '../components'

import POSTS from '@/constants/posts'

export const PostList = () => {
  const _posts = (POSTS as Post[]) || []

  return (
    <Fragment>
      <div className="post-list">
        {_posts.map((p) => {
          return <PostItem post={p} key={p.id} />
        })}
      </div>

      <style jsx>{`
        .post-list {
          display: grid;
          gap: 16px;
        }
      `}</style>
    </Fragment>
  )
}
