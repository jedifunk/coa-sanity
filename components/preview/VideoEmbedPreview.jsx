import React from 'react'
import getVideoId from 'get-video-id'

const VideoEmbedPreview = ({ value }) => {

  let iFrameStyles = {
    width: '100%',
    height: '100%',
    aspectRatio: '16/9'
  }

  function getEmbedCode(value) {
    const videoId = (value && value.url) ? getVideoId(value.url) : ''

    if (!videoId) {
      return <span />
    }

    switch (videoId.service) {
      case 'youtube': {
        return <iframe style={iFrameStyles} src={`https://www.youtube.com/embed/${videoId.id}?rel=0`} frameBorder="0" allowFullScreen />
      }

      case 'vimeo': {
        return (
          <iframe
            style={iFrameStyles}
            src={`https://player.vimeo.com/video/${videoId.id}`}
            width="640"
            frameBorder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowFullScreen
          />
        )
      }
      default: {
        return <span>Unsupported video service: {videoId.service}</span>
      }
    }
  }

  return (
    getEmbedCode(value)
  )

}

export default VideoEmbedPreview