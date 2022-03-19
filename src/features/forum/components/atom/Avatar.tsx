import { Fragment } from 'react'

type AvatarProps = {
  src: string
  alt?: string
}

export const Avatar = (props: AvatarProps) => {
  const { src, alt } = props

  return (
    <Fragment>
      <div className="avatar">
        <img alt={alt} src={src} />
      </div>

      <style jsx>{`
        .avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          overflow: hidden;
        }
      `}</style>
    </Fragment>
  )
}
