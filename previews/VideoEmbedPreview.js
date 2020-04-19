import React from 'react'
import Player from 'react-player'

const VideoPlayer = ({ value }) => {
console.log(value)
  const { url } = value

  return (
    <Player url={url} />
  )

}

export default VideoPlayer