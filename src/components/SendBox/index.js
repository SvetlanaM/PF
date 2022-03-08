import React from 'react'

import { FacebookShareButton, FacebookIcon } from 'react-share'

const SendBox = (props) => {
  return (
    <FacebookShareButton
      url={props.url}
      quote={props.qoute}
      onShareWindowClose={props.onShareWindowClose}
      hashtag={props.hashtag}
    >
      <FacebookIcon size={37} />
    </FacebookShareButton>
  )
}

export default SendBox
