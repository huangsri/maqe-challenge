import { Fragment } from 'react'

import { Avatar } from '../atom'

import { formatDateTime } from '@/lib/helpers'

type AuthorSectionProps = {
  author: Author
  createdAt: string
}

export const AuthorSection = (
  props: AuthorSectionProps
): React.ReactElement => {
  const { author, createdAt } = props

  return (
    <Fragment>
      <div className="article-author">
        <Avatar src={author.avatar_url} alt={author.name} />
        <p>
          <strong>{author.name}</strong>&nbsp;posted on&nbsp;
          {formatDateTime(createdAt, 'dddd, MMMM D, YYYY, HH:MM')}
        </p>
      </div>

      <style jsx>{`
        .article-author {
          padding: 8px 16px;
          display: grid;
          gap: 4px;
          grid-template-columns: 24px 1fr;
          border-bottom: 1px solid rgba(200, 200, 200, 0.5);
          color: #888888;
          font-size: 14px;
          font-weight: 500;
        }

        .article-author strong {
          color: #f2714d;
        }
      `}</style>
    </Fragment>
  )
}
