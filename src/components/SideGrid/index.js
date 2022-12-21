import SendBox from '../SendBox/index'

const SideGrid = ({
  from,
  handleChange,
  newUrl,
  onShareWindowClose,
  nameInput,
}) => {
  return (
    <section id="send">
      <span className="info">
        Write your name and share personalised PF for your friends on Facebook
        :)
      </span>
      <div id="send-next">
        <div className="left-side">
          <input
            type="text"
            value={from}
            onChange={handleChange}
            className="input-name"
            placeholder="Zadaj svoje meno"
            ref={nameInput}
          />
        </div>
        <div className="right-side">
          <SendBox
            url={newUrl}
            hashtag={`#pffrom${from}`}
            onShareWindowClose={onShareWindowClose}
          />
        </div>
      </div>
    </section>
  )
}

export default SideGrid
