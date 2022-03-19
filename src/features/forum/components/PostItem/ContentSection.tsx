import { Fragment } from 'react'

type ContentSectionProps = {
  post: Post
}

export const ContentSection = (
  props: ContentSectionProps
): React.ReactElement => {
  const { post } = props

  return (
    <Fragment>
      <div className="content-section">
        <img src={post.image_url} alt={post.title} />
        <div className="post">
          <a href="#">
            <h3 className="post__title">{post.title}</h3>
          </a>
          <p className="post__body">{post.body}</p>
        </div>
      </div>

      <style jsx>{`
        .content-section {
          padding: 16px;
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 16px;
        }

        .post {
        }

        .post a:hover {
          text-decoration: underline;
        }

        .post__title {
          font-size: 20px;
          font-weight: bold;
        }

        .post__body {
          margin-top: 8px;
        }
      `}</style>
    </Fragment>
  )
}
