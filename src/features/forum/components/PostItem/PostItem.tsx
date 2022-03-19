import { Fragment } from 'react'

import { AuthorSection } from './AuthorSection'
import { ContentSection } from './ContentSection'

import AUTHORS from '@/constants/authors'

type ArticleItemProps = {
  post: Post
}

export const PostItem = (props: ArticleItemProps): React.ReactElement => {
  const { post } = props

  const author = (AUTHORS as Author[]).find(
    (author) => author.id === post.author_id
  ) as Author

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
