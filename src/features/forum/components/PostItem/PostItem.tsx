import { Fragment, useMemo } from 'react'

import { AuthorSection } from './AuthorSection'
import { ContentSection } from './ContentSection'

import AUTHORS from '@/constants/authors.json'

type ArticleItemProps = {
  post: Post
}

export const PostItem = (props: ArticleItemProps): React.ReactElement => {
  const { post } = props

  const author = useMemo(
    () =>
      (AUTHORS as Author[]).find(
        (author) => author.id === post.author_id
      ) as Author,
    [post.author_id]
  )

  return (
    <Fragment>
      <div className="post-item">
        <AuthorSection author={author} createdAt={post.created_at} />
        <ContentSection post={post} />
      </div>

      <style jsx>
        {`
          .post-item {
            background-color: white;
            box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
            border-radius: 2px;
          }

          .post-item:nth-child(even) {
            background-color: #ccecff;
          }
        `}
      </style>
    </Fragment>
  )
}
