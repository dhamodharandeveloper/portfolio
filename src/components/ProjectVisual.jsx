const rooms = ['A-101', 'A-102', 'B-201', 'B-202', 'C-301', 'C-302']

function HostelMock() {
  return (
    <div className="mock">
      <div className="mock__bar">
        <i />
        <i />
        <i />
        <em>hostel_management.app</em>
        <b>WEB</b>
      </div>
      <div className="mock__body">
        <aside className="mock__side">
          <i className="is-active" />
          <i />
          <i />
          <i />
          <i />
        </aside>
        <div className="mock__main">
          <div className="mock__head">
            <span className="mock__title">Room allocation</span>
            <span className="mock__btn" />
          </div>
          <div className="mock__stats">
            <div className="mock__stat">
              <em>Students</em>
              <b />
            </div>
            <div className="mock__stat">
              <em>Rooms</em>
              <b />
            </div>
            <div className="mock__stat">
              <em>Requests</em>
              <b />
            </div>
          </div>
          <div className="mock__rooms">
            {rooms.map((room, index) => (
              <div
                className={`mock__room ${index === 1 || index === 4 ? 'is-active' : ''}`}
                key={room}
              >
                <span>{room}</span>
                <i />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function LibraryMock() {
  return (
    <div className="mock">
      <div className="mock__bar">
        <i />
        <i />
        <i />
        <em>online_library.app</em>
        <b>WEB</b>
      </div>
      <div className="mock__body">
        <aside className="mock__side">
          <i />
          <i className="is-active" />
          <i />
          <i />
          <i />
        </aside>
        <div className="mock__main">
          <div className="mock__head">
            <span className="mock__title">Browse collection</span>
            <span className="mock__btn" />
          </div>
          <div className="mock__search">
            <i />
            <span />
          </div>
          <div className="mock__shelf" aria-hidden="true">
            {Array.from({ length: 14 }, (_, index) => (
              <span className="mock__book" key={index} />
            ))}
          </div>
          <div className="mock__cards">
            {Array.from({ length: 3 }, (_, index) => (
              <div className="mock__card" key={index}>
                <i />
                <div>
                  <span />
                  <span />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const mocks = {
  hostel: HostelMock,
  library: LibraryMock,
}

const moduleIds = { hostel: '01', library: '02', coco: '03' }

export default function ProjectVisual({ variant, image }) {
  const Mock = mocks[variant] ?? HostelMock
  return (
    <div
      className={`pv pv--${variant}${image ? ' pv--shot' : ''}`}
      aria-hidden="true"
    >
      {image ? (
        <>
          <div
            className="pv__shot-bg"
            style={{ backgroundImage: `url(${image})` }}
          />
          <img className="pv__shot" src={image} alt="" loading="lazy" />
        </>
      ) : (
        <>
          <div className="pv__grid" />
          <Mock />
        </>
      )}
      <div className="pv__scan" />
      <div className="pv__hud">
        <span>● LIVE PREVIEW</span>
        <span>MODULE / {moduleIds[variant] ?? '01'}</span>
      </div>
    </div>
  )
}
