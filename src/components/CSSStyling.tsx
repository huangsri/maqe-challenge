import { Fragment } from 'react'

const primaryColor = '#67C3E9'
const secondaryColor = '#9DD4D1'

export const CSSStyling = (): React.ReactElement => {
  return (
    <Fragment>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '##F7F7F7',
        }}
      >
        <div className="box">
          <div className="outer">
            <div className="inner">
              <div className="item">M</div>
              <div className="item">A</div>
              <div className="item">Q</div>
              <div className="item">E</div>
            </div>

            <div className="decor"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .box {
          border-radius: 10px;
          width: 700px;
          height: 700px;
          margin: auto;
          box-shadow: 0 0 0 10px white, 0 0 0 20px ${primaryColor},
            16px 16px 24px 20px rgba(0, 0, 0, 0.3);
        }

        .outer {
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            ${primaryColor},
            ${secondaryColor}
          );
          border-radius: 15px;
          position: relative;
        }

        .inner {
          padding: 60px;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 45% 45%;
          grid-template-rows: 45% 45%;
          align-items: stretch;
          gap: 10%;
        }

        .item {
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${primaryColor};
          font-size: 100px;
          box-shadow: inset 2px 2px 10px 3px rgba(0, 0, 0, 0.4);
          position: relative;
          z-index: 1;
          border-radius: 4px;
          text-shadow: -1px 1px 1px rgba(0, 0, 0, 0.4);
        }

        .decor {
          position: absolute;
          width: 55%;
          height: 55%;
          background: white;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.3;
        }
      `}</style>
    </Fragment>
  )
}
